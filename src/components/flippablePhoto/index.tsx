'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import styles from './index.module.scss';

type FlippablePhotoProps = {
  frontSrc: string;
  backSrc: string;
};

const FlippablePhoto = ({ frontSrc, backSrc }: FlippablePhotoProps) => {
  const [rotation, setRotation] = useState(0);
  const dragX = useMotionValue(0);
  const rotateZ = useTransform(dragX, [-200, 0, 200], [-15, 0, 15]);
  const isDragging = useRef(false);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = 80;

    if (Math.abs(info.offset.x) > threshold) {
      const sign = info.offset.x > 0 ? 1 : -1;
      setRotation((prev) => prev + sign * 900);
    }

    animate(dragX, 0, { type: 'spring', stiffness: 300, damping: 30 });
  };

  const handleClick = () => {
    if (!isDragging.current) {
      setRotation((prev) => prev + 900);
    }
  };

  return (
    <div className={styles.flipContainer}>
      <motion.div
        className={styles.flipCard}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.5}
        onDragStart={() => {
          isDragging.current = true;
        }}
        onDragEnd={(e, info) => {
          handleDragEnd(e, info);
          setTimeout(() => {
            isDragging.current = false;
          }, 100);
        }}
        onClick={handleClick}
        style={{
          x: dragX,
          rotateZ,
          cursor: 'grab',
        }}
        whileTap={{ cursor: 'grabbing' }}
        animate={{ rotateY: rotation }}
        transition={{ type: 'spring', stiffness: 50, damping: 14, mass: 1.2 }}
      >
        <div className={styles.face}>
          <img src={frontSrc} alt="アイコン" draggable={false} />
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <img src={backSrc} alt="シークレット" draggable={false} />
        </div>
      </motion.div>
    </div>
  );
};

export default FlippablePhoto;
