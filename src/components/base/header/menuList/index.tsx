'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HAMBURGERICON } from '@/constants/icons';
import potate from '../../../../../public/hamburger/potato.png';
import styles from './index.module.scss';

const MENU_ID = 'header-menu';

const MENU_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/posts', label: 'Posts' },
];

const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 開いている間だけ「Escape」と「外側クリック」で閉じられるようにする
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div className={styles.container} ref={containerRef}>
      <motion.button
        type="button"
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        aria-expanded={isOpen}
        aria-controls={MENU_ID}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      >
        {isOpen ? (
          <div className={styles.potato_warp}>
            <motion.div
              className={styles.iconWrapper}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <img src={potate.src} alt="" />
            </motion.div>
            <motion.div
              className={styles.iconWrapper}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -45 }}
              transition={{ duration: 0.3 }}
            >
              <img src={potate.src} alt="" />
            </motion.div>
          </div>
        ) : (
          <div className={styles.burger_warp}>
            <motion.div
              className={styles.iconWrapper}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {HAMBURGERICON.map(
                ({ component: Icon, label, width, height }) => (
                  <div key={label} className={styles.iconContainer}>
                    <Icon width={width} height={height} aria-hidden="true" />
                  </div>
                ),
              )}
            </motion.div>
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id={MENU_ID}
            aria-label="メインメニュー"
            className={styles.menu}
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 150, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {MENU_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={styles.menuItem}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuList;
