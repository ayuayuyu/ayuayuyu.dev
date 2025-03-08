import { FRONTEND, BACKEND, OTHER } from '@/constants/mainskill';
import Title from '@/components/title';
import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './index.module.scss';

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <h2>Frontend</h2>
      <div className={styles.gridContainer}>
        {FRONTEND.map(({ icon, label, width, height }) => (
          <div key={label} className={styles.iconContainer}>
            <Icon icon={icon} width={width} height={height} />
            <p>{label}</p>
          </div>
        ))}
      </div>
      <h2>Backend</h2>
      <div className={styles.gridContainer}>
        {BACKEND.map(({ icon, label, width, height }) => (
          <div key={label} className={styles.iconContainer}>
            <Icon icon={icon} width={width} height={height} />
            <p>{label}</p>
          </div>
        ))}
      </div>
      <h2>Other</h2>
      <div className={styles.gridContainer}>
        {OTHER.map(({ icon, label, width, height }) => (
          <div key={label} className={styles.iconContainer}>
            <Icon icon={icon} width={width} height={height} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
