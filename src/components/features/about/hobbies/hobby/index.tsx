import styles from './index.module.scss';

type HobbyCardProps = {
  title: string;
  description: string;
};

const HobbyCard = ({ title, description }: HobbyCardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
export default HobbyCard;
