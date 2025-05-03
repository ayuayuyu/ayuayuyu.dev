import { MAINSKILLS } from '@/constants/icons';
import TitleLayout from '@/components/title';
import SkillLayout from '@/components/skill';
import styles from './index.module.scss';

const MainSkills = () => {
  return (
    <div>
      <TitleLayout>Skills</TitleLayout>
      <div className={styles.container}>
        <SkillLayout skills={MAINSKILLS}>Main</SkillLayout>
      </div>
    </div>
  );
};
export default MainSkills;
