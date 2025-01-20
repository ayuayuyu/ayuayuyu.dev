import {
  SiC,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiTypst,
  SiMarkdown,
  SiVercel,
  SiRender,
} from "@icons-pack/react-simple-icons";
import styles from "../icons.module.scss";

const icons = [
  { Component: SiC, label: "C言語", color: "#A8B9CC" },
  { Component: SiGit, label: "Git", color: "#F04832" },
  { Component: SiGithub, label: "GitHub", color: "#181717" },
  { Component: SiFigma, label: "Figma", color: "#F24E1E" },
  { Component: SiCanva, label: "Canva", color: "#00C4CC" },
  { Component: SiTypst, label: "Typst", color: "#239DAD" },
  { Component: SiMarkdown, label: "Markdown", color: "#000000" },
  { Component: SiVercel, label: "Vercel", color: "#000000" },
  { Component: SiRender, label: "Render", color: "#000000" },
];

const OtherIcons = () => {
  return (
    <div className={styles.gridContainer}>
      {icons.map(({ Component, label, color }) => (
        <div key={label} className={styles.iconContainer}>
          <Component size={48} fill={color} />
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
};
export default OtherIcons;
