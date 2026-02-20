import Link from 'next/link';
import svg from '../../../../public/default/404.svg';
import styles from './index.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img src={svg.src} alt="404" className={styles.svg} />
      <div className={styles.message}>
        <p className={styles.title}>迷子になっちゃったみたい… 😢</p>
        <p className={styles.subtitle}>お探しのページが見つかりませんでした</p>
      </div>
      <div>
        <Link href="/" className={styles.backBtn}>
          ✦ ホームに戻る
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
