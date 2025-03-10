import Link from 'next/link';
import styles from './index.module.scss';

type HistorysProps = {
  title: string;
  organization: string;
  link: string;
  description: string;
  year: string;
  month: string;
};
const History = ({
  title,
  organization,
  link,
  description,
  year,
  month,
}: HistorysProps) => {
  return (
    <>
      <div className={styles.subContainer}>
        <div className={styles.history}>
          <div className={styles.point}>
            {year}.{month}
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.historyItem}>
          <div className={styles.subTitle}>{title}</div>
          <Link href={link || 'No link'} className={styles.navLink}>
            {organization}
          </Link>
          {/* <p className={styles.day}>{date}</p> */}

          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default History;
