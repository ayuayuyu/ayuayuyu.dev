import styles from './index.module.scss';
import IconImg from '../../../../public/default/icon.webp';
import MenuList from './menuList';
import { HANDLENAME } from '@/constants/myname';
import { Icons } from './icons';
import Link from 'next/link';

const Header = () => {
  return (
    // バーも中身も全幅。ロゴは左端、アイコンは右端のギリギリに置く
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="ホームへ">
          <img src={IconImg.src} alt="" className={styles.icon} />
          <span className={styles.name}>{HANDLENAME}</span>
        </Link>
        {/* 2つのアイコンは同じ行・同じ箱サイズで並べて水平を揃える */}
        <div className={styles.actions}>
          <Icons />
          <MenuList />
        </div>
      </div>
    </header>
  );
};
export default Header;
