'use client';

import { motion } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const AnimatedSection = ({
  children,
  delay = 0,
  className,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
