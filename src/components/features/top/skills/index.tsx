import { MAINSKILLS } from '@/constants/mainskill';
import Title from '@/components/title';
import Skill from '@/components/skill';
import styles from './index.module.scss';

const MainSkills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <div className={styles.container}>
        <Skill skills={MAINSKILLS}>Main</Skill>
      </div>
    </div>
  );
};
export default MainSkills;
