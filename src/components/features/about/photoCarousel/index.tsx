'use client';

import { useState, useRef } from 'react';
import GradientTitle from '@/components/gradientTitle';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ABOUT_PHOTOS } from '@/constants/about_photos';
import styles from './index.module.scss';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const rotateY = useTransform(dragX, [-200, 0, 200], [-25, 0, 25]);

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset < -threshold || velocity < -500) {
      // swipe left → next
      setCurrentIndex((prev) => (prev + 1) % ABOUT_PHOTOS.length);
    } else if (offset > threshold || velocity > 500) {
      // swipe right → prev
      setCurrentIndex(
        (prev) => (prev - 1 + ABOUT_PHOTOS.length) % ABOUT_PHOTOS.length,
      );
    }

    animate(dragX, 0, { type: 'spring', stiffness: 300, damping: 30 });
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  if (ABOUT_PHOTOS.length === 0) return null;

  return (
    <div>
      <GradientTitle subtitle="― フォトギャラリー ―">Gallery</GradientTitle>
      <div className={styles.carouselWrapper} ref={containerRef}>
        <div className={styles.stage}>
          <motion.div
            className={styles.card}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            style={{
              x: dragX,
              rotateY,
              cursor: 'grab',
            }}
            whileTap={{ cursor: 'grabbing' }}
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <img
              src={ABOUT_PHOTOS[currentIndex].src}
              alt={ABOUT_PHOTOS[currentIndex].alt}
              className={styles.photo}
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() =>
            goTo((currentIndex - 1 + ABOUT_PHOTOS.length) % ABOUT_PHOTOS.length)
          }
          aria-label="前の写真"
        >
          ‹
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => goTo((currentIndex + 1) % ABOUT_PHOTOS.length)}
          aria-label="次の写真"
        >
          ›
        </button>

        {/* Dots */}
        <div className={styles.dots}>
          {ABOUT_PHOTOS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`}
              onClick={() => goTo(i)}
              aria-label={`写真 ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className={styles.counter}>
          <span className={styles.current}>{currentIndex + 1}</span>
          <span className={styles.separator}>/</span>
          <span className={styles.total}>{ABOUT_PHOTOS.length}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;
