import { FRONTEND, BACKEND, OTHER } from '@/constants/icons';
import TitleLayout from '@/components/title';
import SkillLayout from '@/components/skill';
import styles from './index.module.scss';

const Skills = () => {
  return (
    <div>
      <TitleLayout>Skills</TitleLayout>
      <div className={styles.container}>
        <SkillLayout skills={FRONTEND}>Frontend</SkillLayout>
        <SkillLayout skills={BACKEND}>Backend</SkillLayout>
        <SkillLayout skills={OTHER}>Other</SkillLayout>
      </div>
    </div>
  );
};
export default Skills;
