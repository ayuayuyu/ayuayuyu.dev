import styles from "./index.module.scss";
import Image from "next/image";
import iconImg from "../../../public/default/icon.webp";
import { DisplaySentence } from "@/constans/sentence";
import MYNAME from "@/constans/myname";
import AboutButton from "./button";
const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.AboutMe}>
          <p className={styles.title}>About Me</p>
        </div>
        <div className={styles.profile}>
          <div className={styles.info}>
            <p className={styles.name}>{MYNAME}</p>
            <div className={styles.sentence}>
              <DisplaySentence />
            </div>
            <AboutButton />
          </div>
          <div className={styles.selfie}>
            <Image src={iconImg} alt="アイコン" className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
