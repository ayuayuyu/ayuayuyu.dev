import { FRONTEND, BACKEND, OTHER } from '@/constants/icons';
import GradientTitle from '@/components/gradientTitle';
import SkillLayout from '@/components/skill';
import styles from './index.module.scss';

const Skills = () => {
  return (
    <div>
      <GradientTitle subtitle="― 技術スタック ―">Skills</GradientTitle>
      <div className={styles.container}>
        <SkillLayout skills={FRONTEND}>Frontend</SkillLayout>
        <SkillLayout skills={BACKEND}>Backend</SkillLayout>
        <SkillLayout skills={OTHER}>Other</SkillLayout>
      </div>
    </div>
  );
};
export default Skills;
