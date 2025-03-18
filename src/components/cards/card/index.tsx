import TagLayout from '@/components/tag';
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
  return (
    <div className={styles.card}>
      <Link href={link || ''}>
        <div className={styles.image}>
          <img
            src={imageUrl}
            alt="アイコン"
            width={300}
            height={250}
            className={styles.icon}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.subInfo}>
            <div className={styles.tag}>
              <TagLayout>{tag}</TagLayout>
            </div>
            <div className={styles.date}>{date}</div>
          </div>
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
    </div>
  );
};
export default Card;
