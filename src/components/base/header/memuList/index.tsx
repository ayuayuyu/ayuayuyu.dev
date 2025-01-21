"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export const MenuList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className={isOpen ? styles.cross : styles.burger}></span>
      </button>
      {isOpen && (
        <nav className={styles.navMenu}>
          <Link href="/" className={styles.navLink}>
            top
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/posts" className={styles.navLink}>
            Posts
          </Link>
        </nav>
      )}
    </div>
  );
};
