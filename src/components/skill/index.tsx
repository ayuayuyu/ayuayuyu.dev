import styles from './index.module.scss';
import { SVGProps } from 'react';

type SkillItem = {
  label: string;
  width: string;
  height: string;
  component: React.FC<SVGProps<SVGSVGElement>>;
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
        {skills.map(({ component: Icon, label, width, height }) => (
          <div key={label} className={styles.iconContainer}>
            <Icon width={width} height={height} />
            <div>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLayout;
