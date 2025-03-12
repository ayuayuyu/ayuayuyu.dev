import styles from './index.module.scss';
import Image from 'next/image';
import IconImg from '../../../../public/default/icon.webp';
import MYNAME from '@/constants/myname';
const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={IconImg} alt="アイコン" className={styles.icon} />
      <div className={styles.name}>{MYNAME}</div>
      <div className={styles.icons}>{/* <Icons /> */}</div>
      <div>{/* <MenuList /> */}</div>
    </header>
  );
};
export default Header;
