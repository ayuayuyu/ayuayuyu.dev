'use client';

import { motion } from 'framer-motion';
import styles from './index.module.scss';

type GradientTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
};

const GradientTitle = ({ children, subtitle }: GradientTitleProps) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.title}>{children}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.decorLine}>
        <span className={styles.dot} />
        <span className={styles.line} />
        <span className={styles.dot} />
      </div>
    </motion.div>
  );
};

export default GradientTitle;
