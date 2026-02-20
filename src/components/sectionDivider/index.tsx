'use client';

import styles from './index.module.scss';

type SectionDividerProps = {
  emoji?: string;
};

const SectionDivider = ({ emoji = '✦' }: SectionDividerProps) => {
  return (
    <div className={styles.divider}>
      <div className={styles.line} />
      <span className={styles.emoji}>{emoji}</span>
      <div className={styles.line} />
    </div>
  );
};

export default SectionDivider;
