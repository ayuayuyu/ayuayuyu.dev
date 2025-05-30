import TagLayout from '@/components/tag';
import Link from 'next/link';
import styles from './index.module.scss';

type ProductCardProps = {
  isEven: boolean;
  imageUrl: string;
  title: string;
  link: string;
  description: string;
};

const ProductsCard = ({
  isEven,
  imageUrl,
  title,
  link,
  description,
}: ProductCardProps) => {
  return (
    <div className={styles.card} data-even={isEven}>
      <div className={styles.image}>
        <img src={imageUrl} alt="アイコン" className={styles.icon} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <TagLayout>Web</TagLayout>
        <p className={styles.description}>{description}</p>
        <Link href={link || ''} className={styles.link}>
          詳しくみる
        </Link>
      </div>
    </div>
  );
};
export default ProductsCard;
