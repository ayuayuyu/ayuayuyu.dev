import styles from './index.module.scss';
import Image from 'next/image';
import iconImg from '../../../../../public/defalut/icon.webp';
import MYNAME from '@/constants/myname';
import DisplaySentence from './displaySentence';
import Title from '@/components/title';

const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.AboutMe}>
          <Title>About Me</Title>
        </div>
        <div className={styles.profile}>
          <div className={styles.info}>
            <p className={styles.name}>{MYNAME}</p>
            <div>
              <DisplaySentence />
            </div>
          </div>
          <div className={styles.selfie}>
            <Image src={iconImg} alt="アイコン" className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
