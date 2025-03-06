import styles from './index.module.scss';
import Link from 'next/link';
import { Icon } from '@iconify/react';

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
        <Icon icon="rivet-icons:link-external" width="32" height="32" />
      </Link>
    </div>
  );
};

export default AwardCard;
