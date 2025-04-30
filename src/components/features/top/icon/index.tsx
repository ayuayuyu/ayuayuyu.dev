import topIcon from '../../../../../public/pc.png';
import styles from './index.module.scss';

const TopIcon = () => {
  return (
    <div className={styles.img_wrap}>
      <img src={topIcon.src} alt="titleicon" />
    </div>
  );
};
export default TopIcon;
