import TagLayout from '@/components/tag';
import { formattedDate } from '@/utils/formattes';
import Link from 'next/link';
import styles from './index.module.scss';

type CardProps = {
  title: string;
  tag: string;
  date: string;
  imageUrl: string;
  link: string;
};

const Card = ({ title, tag, date, imageUrl, link }: CardProps) => {
  const displayDate = formattedDate(date);
  return (
    <div className={styles.card}>
      <Link href={link || ''}>
        <div className={styles.image_wrap}>
          <img src={imageUrl} alt="アイコン" className={styles.icon} />
        </div>
        <div className={styles.info}>
          <div className={styles.subInfo}>
            <div className={styles.tag}>
              <TagLayout>{tag}</TagLayout>
            </div>
            <div className={styles.date}>{displayDate}</div>
          </div>
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
    </div>
  );
};
export default Card;
