import Link from 'next/link';
import { GitLink } from '@/constants/link';
import { Github } from '@/constants/svgIcon';
import styles from './index.module.scss';

export const Icons = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href={GitLink}>
          <Github />
        </Link>
      </div>
    </>
  );
};
