import Link from 'next/link';
import svg from '../../../../public/default/404.svg';
import styles from './index.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img src={svg.src} alt="アイコン" className={styles.svg} />
      <div>
        <Link href="/" className={styles.backBtn}>
          ホームに戻る
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
