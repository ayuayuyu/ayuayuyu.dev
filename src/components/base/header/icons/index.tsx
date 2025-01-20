import { SiGithub } from "@icons-pack/react-simple-icons";

import Link from "next/link";
// import { SiGithub, SiX, SiQiita } from "@icons-pack/react-simple-icons";
import styles from "./index.module.scss";

export const Icons = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href="https://github.com/ayuayuyu">
          <SiGithub size={48} fill="#000000" className={styles.Github} />
        </Link>
        {/* <Link href="https://x.com/umaminokiami">
          <SiX size={48} fill="#000000" className={styles.X} />
        </Link>
        <Link href="https://qiita.com/Ayuayuyu">
          <SiQiita size={48} fill="#000000" className={styles.Qiita} />
        </Link> */}
      </div>
    </>
  );
};
