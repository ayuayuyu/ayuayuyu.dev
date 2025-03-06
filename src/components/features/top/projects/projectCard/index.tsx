import Tag from '@/components/tag';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import styles from './index.module.scss';

type ProjectCardProps = {
  title: string;
  tag: string;
  date: string;
  imageUrl: StaticImageData;
  link: string;
};

const ProjectCard = ({
  title,
  tag,
  date,
  imageUrl,
  link,
}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={link || ''}>
        <div className={styles.image}>
          <Image src={imageUrl} alt="アイコン" className={styles.icon} />
        </div>
        <div className={styles.info}>
          <div className={styles.subInfo}>
            <div className={styles.tag}>
              <Tag>{tag}</Tag>
            </div>
            <div className={styles.date}>{date}</div>
          </div>
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
    </div>
  );
};
export default ProjectCard;
