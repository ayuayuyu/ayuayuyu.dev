import Link from 'next/link';
import svg from '../../../../public/default/404.svg';
import styles from './index.module.scss';
import TypeWriter from '@/components/typeWriter';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img src={svg.src} alt="404" className={styles.svg} />
      <div className={styles.message}>
        <TypeWriter
          text="お探しのページが見つかりませんでした"
          speed={120}
          className={styles.title}
        />
      </div>
      <div>
        <Link href="/" className={styles.backBtn}>
          ホームに戻る
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
