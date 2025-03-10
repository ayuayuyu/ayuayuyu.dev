import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './index.module.scss';

type SkillItem = {
  icon: string;
  label: string;
  width: string;
  height: string;
};
type SkillProps = {
  children: React.ReactNode;
  skills: SkillItem[];
};

const SkillLayout = ({ children, skills }: SkillProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{children}</div>
      <div className={styles.gridContainer}>
        {skills.map(({ icon, label, width, height }) => (
          <div key={label} className={styles.iconContainer}>
            <Icon icon={icon} width={width} height={height} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLayout;
