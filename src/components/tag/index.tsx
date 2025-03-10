import styles from './index.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

type TagProps = {
  children: React.ReactNode;
};

const TagLayout = ({ children }: TagProps) => {
  return (
    <span className={styles.tag}>
      <Icon icon="material-symbols:tag" width="16" height="16" />
      {children}
    </span>
  );
};
export default TagLayout;
