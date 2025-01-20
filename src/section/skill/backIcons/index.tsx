import {
  SiNodedotjs,
  SiFirebase,
  SiPython,
  SiFastapi,
  SiSocketdotio,
} from "@icons-pack/react-simple-icons";
import styles from "../icons.module.scss";

const icons = [
  { Component: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { Component: SiFirebase, label: "Firebase", color: "#DD2C00" },
  { Component: SiPython, label: "Python", color: "#3776AB" },
  { Component: SiFastapi, label: "FastAPI", color: "#009688" },
  { Component: SiSocketdotio, label: "Socket.io", color: "#010101" },
];

const TOTAL_COLUMNS = 9; // 常に表示する列数
const placeholdersCount = Math.max(TOTAL_COLUMNS - icons.length, 0);

const BackIcons = () => {
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
export default BackIcons;
