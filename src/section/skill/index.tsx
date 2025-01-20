import FrontIcons from "./frontIcons";
import BackIcons from "./backIcons";
import OtherIcons from "./others";
import styles from "./index.module.scss";
const Skills = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Skills</div>
        <div className={styles.sectionTitle}>
          <p>フロントエンド</p>
        </div>
        <FrontIcons />
        <div className={styles.sectionTitle}>
          <p>バックエンド</p>
        </div>
        <BackIcons />
        <div className={styles.sectionTitle}>
          <p>その他</p>
        </div>
        <OtherIcons />
      </div>
    </>
  );
};
export default Skills;
