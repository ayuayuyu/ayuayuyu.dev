import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
} from "@icons-pack/react-simple-icons";
import styles from "../icons.module.scss";

const icons = [
  { Component: SiHtml5, label: "HTML", color: "#E34F26" },
  { Component: SiCss3, label: "CSS", color: "#1572B6" },
  { Component: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { Component: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Component: SiReact, label: "React", color: "#61DAFB" },
  { Component: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
];
const TOTAL_COLUMNS = 9; // 常に表示する列数
const placeholdersCount = Math.max(TOTAL_COLUMNS - icons.length, 0);

const FrontIcons = () => {
  return (
    <div className={styles.gridContainer}>
      {icons.map(({ Component, label, color }) => (
        <div key={label} className={styles.iconContainer}>
          <Component size={48} fill={color} />
          <p>{label}</p>
        </div>
      ))}
      {Array.from({ length: placeholdersCount }).map((_, index) => (
        <div key={`placeholder-${index}`} className={styles.placeholder} />
      ))}
    </div>
  );
};
export default FrontIcons;
