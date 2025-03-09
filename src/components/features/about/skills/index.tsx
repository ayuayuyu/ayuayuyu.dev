import { FRONTEND, BACKEND, OTHER } from '@/constants/mainskill';
import Title from '@/components/title';
import Skill from '@/components/skill';
import styles from './index.module.scss';

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <div className={styles.container}>
        <Skill skills={FRONTEND}>Frontend</Skill>
        <Skill skills={BACKEND}>Backend</Skill>
        <Skill skills={OTHER}>Other</Skill>
      </div>
    </div>
  );
};
export default Skills;
