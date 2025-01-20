import Image from "next/image";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import styles from "./index.module.scss";

type ProductCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  gitUrl: string;
};

const defaultImg = "/default/icon.webp";

const ProductCard = ({
  title,
  description,
  imageUrl,
  gitUrl,
}: ProductCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.card}>
        <div className={styles.image}>
          {/* <Image src={imageUrl} alt={title} width={125} height={125} /> */}
          <Image
            src={imageUrl || defaultImg}
            alt={title || "No title"}
            width={125}
            height={125}
          />
        </div>
        <div className={styles.containerDescription}>
          <p className={styles.description}>{description}</p>
          {gitUrl ? (
            <Link href={gitUrl} className={styles.gitUrl}>
              <SiGithub size={35} fill="#ffffff" className={styles.Github} />
            </Link>
          ) : (
            <p className={styles.noLink}>No GitHub Link</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
