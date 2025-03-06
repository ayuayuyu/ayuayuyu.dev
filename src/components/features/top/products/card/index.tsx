import Image from 'next/image';
import Tag from '@/components/tag';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import styles from './index.module.scss';

type ProductCardProps = {
  isEven: boolean;
  icon: StaticImageData;
  title: string;
  link: string;
  description: string;
};

const ProductsCard = ({
  isEven,
  icon,
  title,
  link,
  description,
}: ProductCardProps) => {
  return (
    <div className={styles.card} data-even={isEven}>
      <div className={styles.image}>
        <Image src={icon} alt="アイコン" className={styles.icon} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <Tag>Web</Tag>
        <p className={styles.description}>{description}</p>
        <Link href={link || ''} className={styles.link}>
          詳しくみる
        </Link>
      </div>
    </div>
  );
};
export default ProductsCard;
