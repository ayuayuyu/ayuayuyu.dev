import GMAIL from "@/constans/gmail";
import styles from "./index.module.scss";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Contact</div>
        <div className={styles.description}>
          お問い合わせは以下のメールアドレスからお願いします。
        </div>
        <div className={styles.gmail}>Gmail : {GMAIL}</div>
      </div>
    </>
  );
};
export default Contact;
