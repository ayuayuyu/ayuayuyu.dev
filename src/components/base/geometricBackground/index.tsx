'use client';

import { useEffect, useRef } from 'react';
import styles from './index.module.scss';

// --- チューニング用の定数 ---------------------------------------------------
const AREA_PER_SHAPE = 110_000; // 画面面積あたりの図形数。大きいほど疎になる
const MIN_SHAPES = 8;
const MAX_SHAPES = 22;
const LINK_DISTANCE = 260; // この距離以内の図形どうしを線で結ぶ
const PARALLAX = 26; // ポインタ追従で図形がずれる最大幅(px)
const MAX_DPR = 2; // 高解像度端末で塗りつぶし面積が爆発しないよう頭打ち
const MAX_DELTA = 1 / 30; // タブ復帰直後の巨大 delta で図形が飛ぶのを防ぐ
const SIDES = [3, 4, 6];

type Shape = {
  x: number;
  y: number;
  r: number; // 外接円の半径
  sides: number;
  angle: number;
  spin: number; // 角速度(rad/s)
  vx: number; // 速度(px/s)
  vy: number;
  depth: number; // 0(奥) 〜 1(手前)。視差量・線の太さ・濃さに効く
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const createShapes = (width: number, height: number): Shape[] => {
  const count = Math.min(
    MAX_SHAPES,
    Math.max(MIN_SHAPES, Math.round((width * height) / AREA_PER_SHAPE)),
  );

  return Array.from({ length: count }, () => {
    const depth = Math.random();
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: rand(26, 92) * (0.6 + depth * 0.7),
      sides: SIDES[Math.floor(Math.random() * SIDES.length)],
      angle: Math.random() * Math.PI * 2,
      spin: rand(-0.09, 0.09),
      vx: rand(-9, 9),
      vy: rand(-9, 9),
      depth,
    };
  });
};

const GeometricBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    let width = 0;
    let height = 0;
    let shapes: Shape[] = [];
    let frame = 0;
    let last = 0;

    // target を直接使うとポインタに張り付くので、current で遅れて追従させる
    const pointer = { targetX: 0, targetY: 0, x: 0, y: 0 };

    let shapeColor = '#097bdf';
    let linkColor = '#7d7d7d';

    // 色はテーマトークンから借りる。ここを CSS 側と二重管理しないための読み取り
    const readColors = () => {
      const computed = getComputedStyle(document.documentElement);
      shapeColor = computed.getPropertyValue('--accent').trim() || shapeColor;
      linkColor = computed.getPropertyValue('--text-muted').trim() || linkColor;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // モバイルは URL バーの伸縮で resize が頻発するため、図形は作り直さない
      // （作り直すと配置が毎回リセットされて画面がちらつく）
      if (shapes.length === 0) shapes = createShapes(width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineJoin = 'round';

      // 1) 近い図形どうしを結ぶ線。距離が近いほど濃くする
      ctx.strokeStyle = linkColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < shapes.length; i++) {
        const a = shapes[i];
        const ax = a.x + pointer.x * a.depth;
        const ay = a.y + pointer.y * a.depth;

        for (let j = i + 1; j < shapes.length; j++) {
          const b = shapes[j];
          const bx = b.x + pointer.x * b.depth;
          const by = b.y + pointer.y * b.depth;
          const distance = Math.hypot(ax - bx, ay - by);
          if (distance > LINK_DISTANCE) continue;

          ctx.globalAlpha = (1 - distance / LINK_DISTANCE) * 0.3;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }

      // 2) ワイヤーフレームの多角形と、その頂点のドット
      ctx.strokeStyle = shapeColor;
      ctx.fillStyle = shapeColor;
      for (const shape of shapes) {
        const cx = shape.x + pointer.x * shape.depth;
        const cy = shape.y + pointer.y * shape.depth;

        ctx.globalAlpha = 0.22 + shape.depth * 0.4;
        ctx.lineWidth = 1 + shape.depth;
        ctx.beginPath();
        for (let i = 0; i < shape.sides; i++) {
          const angle = shape.angle + (i * Math.PI * 2) / shape.sides;
          const px = cx + Math.cos(angle) * shape.r;
          const py = cy + Math.sin(angle) * shape.r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        for (let i = 0; i < shape.sides; i++) {
          const angle = shape.angle + (i * Math.PI * 2) / shape.sides;
          ctx.beginPath();
          ctx.arc(
            cx + Math.cos(angle) * shape.r,
            cy + Math.sin(angle) * shape.r,
            1.5 + shape.depth,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
    };

    const step = (time: number) => {
      const delta = last ? Math.min((time - last) / 1000, MAX_DELTA) : 0;
      last = time;

      const follow = Math.min(1, delta * 3);
      pointer.x += (pointer.targetX - pointer.x) * follow;
      pointer.y += (pointer.targetY - pointer.y) * follow;

      for (const shape of shapes) {
        shape.x += shape.vx * delta;
        shape.y += shape.vy * delta;
        shape.angle += shape.spin * delta;

        // 画面外に出たら反対側から出し直す（端で消えたように見せない）
        const margin = shape.r + 40;
        if (shape.x < -margin) shape.x = width + margin;
        else if (shape.x > width + margin) shape.x = -margin;
        if (shape.y < -margin) shape.y = height + margin;
        else if (shape.y > height + margin) shape.y = -margin;
      }

      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (frame || motionQuery.matches || document.hidden) return;
      last = 0;
      frame = requestAnimationFrame(step);
    };

    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const handleResize = () => {
      resize();
      draw();
    };

    // タッチは「ホバー」の概念がないので視差はマウスのみ
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      pointer.targetX = (event.clientX / width - 0.5) * -2 * PARALLAX;
      pointer.targetY = (event.clientY / height - 0.5) * -2 * PARALLAX;
    };

    const handleVisibility = () => (document.hidden ? stop() : start());

    const handleThemeChange = () => {
      readColors();
      draw(); // ループ停止中でも色だけは即反映させる
    };

    const handleMotionChange = () => {
      if (motionQuery.matches) {
        stop();
        pointer.x = 0;
        pointer.y = 0;
        draw();
      } else {
        start();
      }
    };

    readColors();
    resize();
    draw();
    start();

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    window.addEventListener('themechange', handleThemeChange);
    document.addEventListener('visibilitychange', handleVisibility);
    darkQuery.addEventListener('change', handleThemeChange);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      stop();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('themechange', handleThemeChange);
      document.removeEventListener('visibilitychange', handleVisibility);
      darkQuery.removeEventListener('change', handleThemeChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.grid} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default GeometricBackground;
