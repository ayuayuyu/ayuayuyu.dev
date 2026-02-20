'use client';

import { useEffect, useState } from 'react';
import styles from './index.module.scss';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
  colorClass: string;
};

const EMOJIS = ['✦', '⋆', '✧', '○', '◌', '⊹', '∗', '⊛', '◦', '∘'];

const COLOR_CLASSES = ['pink', 'purple', 'cyan', 'sakura', 'lavender'];

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 14,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 8,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      colorClass:
        COLOR_CLASSES[Math.floor(Math.random() * COLOR_CLASSES.length)],
    }));
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className={styles.particleContainer} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`${styles.particle} ${styles[p.colorClass]}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingParticles;
