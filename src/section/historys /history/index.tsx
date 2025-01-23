import Link from "next/link";
import styles from "./index.module.scss";
//Historyに変更したい
type HistorysProps = {
  isEven: boolean;
  title: string;
  organization: string;
  link: string;
  description: string;
  startDate: string;
  endDate: string | null; // nullの場合は現在も働いていることを意味します
};
const History = ({
  isEven,
  title,
  organization,
  link,
  description,
  startDate,
  endDate,
}: HistorysProps) => {
  return (
    <>
      <div className={styles.subContainer} data-even={isEven}>
        <div className={styles.history}>
          <div className={styles.point}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.historyItem}>
          <div className={styles.subTitle}>{title}</div>
          <Link href={link || "No link"} className={styles.navLink}>
            {organization}
          </Link>
          <p className={styles.day}>
            {endDate ? `${startDate} - ${endDate}` : startDate}
          </p>

          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default History;
