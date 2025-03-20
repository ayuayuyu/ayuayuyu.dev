'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import hamburger from '../../../../../public/hamburger/hamburger.png';
import potate from '../../../../../public/hamburger/potato.png';
import styles from './index.module.scss';

const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <motion.button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <div>
            <motion.div
              className={styles.iconWrapper}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <img src={potate.src} alt="Potato X" width={12} height={64} />
            </motion.div>
            <motion.div
              className={styles.iconWrapper}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -45 }}
              transition={{ duration: 0.3 }}
            >
              <img src={potate.src} alt="Potato X" width={12} height={64} />
            </motion.div>
          </div>
        ) : (
          <motion.div
            className={styles.iconWrapper}
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={hamburger.src} alt="Burger Menu" width={64} height={64} />
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menu}
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 150, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className={styles.menuItem}>
              Home
            </Link>
            <Link href="/about" className={styles.menuItem}>
              About
            </Link>
            <Link href="/posts" className={styles.menuItem}>
              posts
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuList;
