import styles from './index.module.scss';
import Image from 'next/image';
import topImg from '../../../public/default/back.webp';

const Top = () => {
  return (
    <>
      <div className={styles.container}>
        <Image src={topImg} alt="背景" className={styles.background} />
        <p className={styles.name}>Ayumu</p>
      </div>
    </>
  );
};

export default Top;
