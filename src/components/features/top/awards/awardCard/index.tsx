import styles from './index.module.scss';
import { LinkExternal } from '@/constants/svgIcon';
import Link from 'next/link';

type AwardProps = {
  award: string;
  hackathonName: string;
  title: string;
  link: string;
  date: string;
};

const AwardCard = ({ award, hackathonName, title, link, date }: AwardProps) => {
  return (
    <div className={styles.awardCard}>
      <div className={styles.awardInfo}>
        <p className={styles.award}>{award}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.subAwardInfo}>
        <p className={styles.hackathonName}>{hackathonName}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <Link href={link || ''} className={styles.link}>
        <LinkExternal />
      </Link>
    </div>
  );
};

export default AwardCard;
