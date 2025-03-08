import Image from 'next/image';
import iconImg from '../../../public/defalut/icon.webp';
import MYNAME from '@/constants/myname';
import Title from '@/components/title';
import Tag from '../tag';
import Link from 'next/link';
import styles from './index.module.scss';

type AboutMeProps = {
  children: React.ReactNode;
  isVisible: boolean;
};

const AboutMes = ({ children, isVisible }: AboutMeProps) => {
  return (
    <div>
      <Title>About Me</Title>
      <div className={styles.profile}>
        <div className={styles.info}>
          <p className={styles.name}>{MYNAME}</p>
          <div className={styles.tag}>
            <Tag>バックエンド</Tag>
          </div>
          <div className={styles.detail}>{children}</div>
          {isVisible && (
            <div className={styles.detailLink}>
              <Link href={'/about'}>詳しくみる</Link>
            </div>
          )}
        </div>
        <div className={styles.selfie}>
          <Image src={iconImg} alt="アイコン" className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
export default AboutMes;
