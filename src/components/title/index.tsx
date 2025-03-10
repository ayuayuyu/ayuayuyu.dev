import styles from './index.module.scss';

type TitleProps = {
  children: React.ReactNode;
};

const TitleLayout = ({ children }: TitleProps) => {
  return <div className={styles.title}>{children}</div>;
};

export default TitleLayout;
