'use client';

import { useState, useEffect } from 'react';
import styles from './index.module.scss';

type TypeWriterProps = {
  text: string;
  speed?: number;
  className?: string;
};

const TypeWriter = ({ text, speed = 60, className }: TypeWriterProps) => {
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
    }
  }, [currentIndex, text, speed]);

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
