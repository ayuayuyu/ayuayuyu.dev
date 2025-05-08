import styles from './index.module.scss';
import { Tag } from '@/constants/svgIcon';

type TagProps = {
  children: React.ReactNode;
};

const TagLayout = ({ children }: TagProps) => {
  return (
    <span className={styles.tag}>
      <Tag />
      {children}
    </span>
  );
};
export default TagLayout;
