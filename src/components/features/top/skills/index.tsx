import { Icon } from '@iconify/react';
import styles from './index.module.scss';
import Title from '@/components/title';
import { MAINSKILLS } from '@/constants/mainskill';

const MainSkills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <div className={styles.gridContainer}>
        {MAINSKILLS.map(({ icon, label, width, height }) => (
          <div key={label} className={styles.iconContainer}>
            <Icon icon={icon} width={width} height={height} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainSkills;
