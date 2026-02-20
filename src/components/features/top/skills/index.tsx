import { MAINSKILLS } from '@/constants/icons';
import GradientTitle from '@/components/gradientTitle';
import SkillLayout from '@/components/skill';
import styles from './index.module.scss';

const MainSkills = () => {
  return (
    <div>
      <GradientTitle subtitle="― メインスキル ―">Skills</GradientTitle>
      <div className={styles.container}>
        <SkillLayout skills={MAINSKILLS}>Main</SkillLayout>
      </div>
    </div>
  );
};
export default MainSkills;
