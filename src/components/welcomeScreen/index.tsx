'use client';

import { useState, useEffect, useCallback } from 'react';
import TypeWriter from '@/components/typeWriter';
import styles from './index.module.scss';

const WELCOME_KEY = 'ayuayuyu_welcomed';

const WelcomeScreen = () => {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const welcomed = sessionStorage.getItem(WELCOME_KEY);
    if (!welcomed) {
      setShow(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleFinish = useCallback(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShow(false);
        sessionStorage.setItem(WELCOME_KEY, 'true');
        document.body.style.overflow = '';
      }, 600);
    }, 800);
  }, []);

  if (!show) return null;

  return (
    <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.greeting}>
          <TypeWriter
            text="ようこそ、ayuayuyuの世界へ！"
            speed={120}
            className={styles.welcomeText}
            onComplete={handleFinish}
          />
        </div>
        <div className={`${styles.sparkles} ${fadeOut ? '' : styles.visible}`}>
          {['✦', '⋆', '✧', '○', '✦'].map((s, i) => (
            <span
              key={i}
              className={styles.sparkle}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
