'use client';

import { useCallback } from 'react';
import styles from './index.module.scss';

type RevealProps = {
  children: React.ReactNode;
  /** 連続して並ぶ要素をずらして出したいときに使う(秒) */
  delay?: number;
};

// セクションを下からふわっと出す。
// 初期状態(opacity:0)を HTML に焼き込むと JS が動かない環境で本文が消えるので、
// 隠すのは ref コールバック（＝JS が動いていて、かつ描画前）でのみ行う。
const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const observe = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    node.dataset.reveal = 'hidden';

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = 'shown';
          // 一度出したら戻さない（戻りスクロールでチカチカさせない）
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={observe}
      className={styles.reveal}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
