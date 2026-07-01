import styles from './index.module.scss';
import IconImg from '../../../../public/default/icon.webp';
import MenuList from './menuList';
import ThemeToggle from './themeToggle';
import { HANDLENAME } from '@/constants/myname';
import { Icons } from './icons';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src={IconImg.src} alt="アイコン" className={styles.icon} />
      </Link>
      <Link href="/">
        <div className={styles.name}>{HANDLENAME}</div>
      </Link>
      <div className={styles.icons}>
        <Icons />
      </div>
      <ThemeToggle />
      <div>
        <MenuList />
      </div>
    </header>
  );
};
export default Header;
