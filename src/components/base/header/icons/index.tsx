import { GitLink } from '@/constants/link';
import { Github } from '@/constants/svgIcon';
import styles from './index.module.scss';

export const Icons = () => {
  return (
    <div className={styles.container}>
      {/* 外部サイトなので新規タブ + rel でタブナビング対策 */}
      <a
        href={GitLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub（新しいタブで開く）"
        className={styles.link}
      >
        <Github width={48} height={48} aria-hidden="true" />
      </a>
    </div>
  );
};
