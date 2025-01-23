import Link from "next/link";
import styles from "./index.module.scss";

type ProductCardProps = {
  title: string;
  linkName: string;
  icon: React.ReactNode;
  url: string;
};

// const defaultImg = "/default/icon.webp";

const ContactCard = ({ title, linkName, icon, url }: ProductCardProps) => {
  return (
    <>
      {url ? (
        <Link href={url} className={styles.url}>
          <div className={styles.subContainer}>
            <div className={styles.subTitle}>{title}</div>
            <div className={styles.card}>
              <div className={styles.CardContainer}>
                <div className={styles.icon}>{icon}</div>
              </div>
            </div>
            <div className={styles.linkName}>{linkName}</div>
          </div>
        </Link>
      ) : (
        <p className={styles.noLink}>No GitHub Link</p>
      )}
    </>
  );
};

export default ContactCard;
