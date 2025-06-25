import TagLayout from '../tag';
import Link from 'next/link';
import styles from './index.module.scss';

type AboutMeProps = {
  children: React.ReactNode;
  name: string;
  tag: string;
  isVisible: boolean;
  img: string;
};

const AboutMeLayout = ({
  children,
  name,
  tag,
  isVisible,
  img,
}: AboutMeProps) => {
  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <div className={styles.tag}>
            <TagLayout>{tag}</TagLayout>
          </div>
          <div className={styles.detail}>{children}</div>
          {isVisible && (
            <div className={styles.detailLink}>
              <Link href={'/about'}>詳しくみる</Link>
            </div>
          )}
        </div>
        <div className={styles.selfie}>
          <img src={img} alt="アイコン" className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
export default AboutMeLayout;
