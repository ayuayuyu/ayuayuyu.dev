import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { HistoryItem } from '@/constants/historys';
import { toWareki } from '@/utils/formattes';
import styles from './index.module.scss';

type HistoryProps = Omit<HistoryItem, 'id' | 'chapter' | 'group'> & {
  index: number;
  showDate: boolean;
  // グループ見出し（h4）の下に置くときは h5 にする
  titleAs?: 'h4' | 'h5';
};

const History = ({
  kind,
  current,
  title,
  organization,
  link,
  description,
  year,
  month,
  index,
  showDate,
  titleAs: Title = 'h4',
}: HistoryProps) => {
  const mm = String(month).padStart(2, '0');
  return (
    <li
      className={styles.item}
      data-kind={kind}
      data-current={current || undefined}
      style={{ '--i': index } as CSSProperties}
    >
      <div className={styles.date}>
        {showDate && (
          <time dateTime={`${year}-${mm}`}>
            <span className={styles.year}>
              {year}.{mm}
            </span>
            <span className={styles.wareki}>{toWareki(year, month)}</span>
          </time>
        )}
      </div>
      <span className={styles.node} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.heading}>
          {current && <span className={styles.nowBadge}>NOW</span>}
          <Title className={styles.subTitle}>{title}</Title>
          {organization && link && (
            <Link
              href={link}
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {organization}
            </Link>
          )}
        </div>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </li>
  );
};

export default History;
