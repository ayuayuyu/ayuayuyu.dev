import styles from "./index.module.scss";
import Image from "next/image";
// import { Icon } from "@iconify/react/dist/iconify.js";
import { Icons } from "./icons";
import { MenuList } from "./memuList";
import MYNAME from "@/constans/myname";
import iconImg from "../../../../public/default/icon.webp";
const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={iconImg} alt="アイコン" className={styles.icon} />
      <div className={styles.name}>{MYNAME}</div>
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
