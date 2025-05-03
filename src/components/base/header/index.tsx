import styles from './index.module.scss';
import IconImg from '../../../../public/default/icon.webp';
import MenuList from './menuList';
import MYNAME from '@/constants/myname';
import { Icons } from './icons';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src={IconImg.src} alt="アイコン" className={styles.icon} />
      </Link>
      <Link href="/">
        <div className={styles.name}>{MYNAME}</div>
      </Link>
      <div className={styles.icons}>
        <Icons />
      </div>
      <div>
        <MenuList />
      </div>
    </header>
  );
};
export default Header;
