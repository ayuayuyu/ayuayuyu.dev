import { SiGithub } from "@icons-pack/react-simple-icons";
import { GitLink } from "@/constans/link";
import Link from "next/link";
// import { SiGithub, SiX, SiQiita } from "@icons-pack/react-simple-icons";
// import { GitLink, XLink, QiitaLink } from "@/constans/link";
import styles from "./index.module.scss";

export const Icons = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href={GitLink}>
          <SiGithub size={48} fill="#000000" className={styles.Github} />
        </Link>
        {/* <Link href={XLink}>
          <SiX size={48} fill="#000000" className={styles.X} />
        </Link>
        <Link href={QiitaLink}>
          <SiQiita size={48} fill="#000000" className={styles.Qiita} />
        </Link> */}
      </div>
    </>
  );
};
