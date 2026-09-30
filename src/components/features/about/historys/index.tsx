import type { CSSProperties } from 'react';
import TitleLayout from '@/components/title';
import History from './history';
import HISTORYS, {
  HISTORY_CHAPTERS,
  type HistoryChapter,
  type HistoryItem,
} from '@/constants/historys';
import styles from './index.module.scss';

const HistoryList = ({
  items,
  titleAs,
}: {
  items: HistoryItem[];
  titleAs?: 'h4' | 'h5';
}) => (
  <ol className={styles.list}>
    {items.map((history, i) => {
      const prev = items[i - 1];
      // 直前と同じ年月なら日付は繰り返さない
      const showDate =
        !prev || prev.year !== history.year || prev.month !== history.month;
      return (
        <History
          key={history.id}
          index={HISTORYS.indexOf(history)}
          showDate={showDate}
          titleAs={titleAs}
          {...history}
        />
      );
    })}
  </ol>
);

const Historys = () => {
  return (
    <div>
      <TitleLayout>History</TitleLayout>
      <div className={styles.timeline}>
        {HISTORY_CHAPTERS.map((chapter: HistoryChapter, chapterIndex) => {
          const items = HISTORYS.filter((h) => h.chapter === chapter.id);
          const headingId = `history-${chapter.id}`;
          return (
            <section
              key={chapter.id}
              className={styles.chapter}
              aria-labelledby={headingId}
            >
              <div
                className={styles.chapterHeading}
                style={{ '--i': HISTORYS.indexOf(items[0]) } as CSSProperties}
              >
                <span className={styles.chapterNumber} aria-hidden="true">
                  {String(chapterIndex + 1).padStart(2, '0')}
                </span>
                <div className={styles.chapterText}>
                  <h3 id={headingId} className={styles.chapterTitle}>
                    {chapter.title}
                  </h3>
                  <span className={styles.chapterLabel}>{chapter.label}</span>
                </div>
              </div>
              {chapter.groups ? (
                chapter.groups.map((group) => {
                  const groupItems = items.filter((h) => h.group === group.id);
                  const groupHeadingId = `${headingId}-${group.id}`;
                  return (
                    <section
                      key={group.id}
                      className={styles.group}
                      aria-labelledby={groupHeadingId}
                    >
                      <div
                        className={styles.groupHeading}
                        style={
                          {
                            '--i': HISTORYS.indexOf(groupItems[0]),
                          } as CSSProperties
                        }
                      >
                        <div className={styles.groupText}>
                          <h4 id={groupHeadingId} className={styles.groupTitle}>
                            {group.title}
                          </h4>
                          <span className={styles.groupLabel}>
                            {group.label}
                          </span>
                        </div>
                      </div>
                      <HistoryList items={groupItems} titleAs="h5" />
                    </section>
                  );
                })
              ) : (
                <HistoryList items={items} />
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};
export default Historys;
