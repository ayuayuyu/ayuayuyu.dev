import Image from "next/image";
import KouziImg from "../../../public/default/kouzi.png";
import styles from "./index.module.scss";

const FixPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>只今工事中</div>
      <Image src={KouziImg} alt="アイコン" className={styles.icon} />
    </div>
  );
};
export default FixPage;
