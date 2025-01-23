import { GmailLink } from "@/constans/link";
import ContactLink from "@/constans/contact";
import ContactCard from "./card";
import Link from "next/link";
import styles from "./index.module.scss";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Contact</div>
        <div className={styles.description}>
          <p>お問い合わせはこちのメールアドレスまたは</p>
          <p>X（旧Twitter）のDMからお願いします。</p>
        </div>
        <Link href={"mailto:" + GmailLink} className={styles.gmail}>
          Gmail : {GmailLink}
        </Link>
        {/* <div className={styles.gmail}>Gmail : {GmailLink}</div> */}
        <div className={styles.card}>
          {ContactLink.map((contact) => (
            <ContactCard
              key={contact.id}
              title={contact.title}
              linkName={contact.linkName}
              icon={contact.icon}
              url={contact.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Contact;
