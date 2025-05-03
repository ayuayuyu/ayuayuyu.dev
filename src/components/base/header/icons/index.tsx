import Link from 'next/link';
import { LINKICON } from '@/constants/icons';
import { GitLink } from '@/constants/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './index.module.scss';

export const Icons = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href={GitLink}>
          {LINKICON.map(({ icon, label, width, height }) => (
            <div key={label} className={styles.iconContainer}>
              <Icon icon={icon} width={width} height={height} />
            </div>
          ))}
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
