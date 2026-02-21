'use client';

import { useState, useEffect } from 'react';
import styles from './index.module.scss';

type TypeWriterProps = {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
};

const TypeWriter = ({
  text,
  speed = 60,
  className,
  onComplete,
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`${styles.typewriter} ${className || ''}`}>
      {displayText}
      <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>
        |
      </span>
    </span>
  );
};

export default TypeWriter;
