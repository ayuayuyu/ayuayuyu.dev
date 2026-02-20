'use client';

import { useEffect, useRef } from 'react';
import styles from './index.module.scss';

const KawaiiCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const emojis = ['💖', '✨', '⭐', '🌸', '💜', '🎀'];
    let mouseX = 0;
    let mouseY = 0;
    let throttleTimer: ReturnType<typeof setTimeout> | null = null;

    const createSparkle = () => {
      if (!containerRef.current) return;

      const sparkle = document.createElement('span');
      sparkle.className = styles.sparkle;
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.left = `${mouseX + (Math.random() - 0.5) * 30}px`;
      sparkle.style.top = `${mouseY + (Math.random() - 0.5) * 30}px`;
      sparkle.style.fontSize = `${Math.random() * 12 + 10}px`;

      containerRef.current.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          createSparkle();
          throttleTimer = null;
        }, 80);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return <div ref={containerRef} className={styles.cursorContainer} />;
};

export default KawaiiCursor;
