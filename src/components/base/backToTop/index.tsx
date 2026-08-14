'use client';

import { useEffect, useState } from 'react';
import styles from './index.module.scss';

// ここまでスクロールしたら「戻る」導線を出す(px)
const SHOW_AFTER = 480;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setIsVisible(window.scrollY > SHOW_AFTER);
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
    };
  }, []);

  const scrollToTop = () => {
    // scrollTo の behavior は CSS の scroll-behavior を上書きするので、
    // reduced-motion の判定はここでもやる
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={styles.button}
      data-visible={isVisible}
      // 非表示のときはキーボードのタブ順からも外す
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      onClick={scrollToTop}
      aria-label="ページ上部に戻る"
      title="ページ上部に戻る"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          d="M12 19V6M12 6l-6 6M12 6l6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
