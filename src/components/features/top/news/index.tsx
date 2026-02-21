'use client';

import { NEWS_DATA, CATEGORY_LABELS } from '@/constants/news';
import GradientTitle from '@/components/gradientTitle';
import type { NewsItem } from '@/constants/news';
import styles from './index.module.scss';

const categoryColor: Record<NewsItem['category'], string> = {
  update: 'update',
  release: 'release',
  blog: 'blog',
  event: 'event',
};

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <GradientTitle subtitle="― お知らせ ―">News</GradientTitle>
      <div className={styles.timeline}>
        {NEWS_DATA.map((item, index) => (
          <div
            key={item.id}
            className={styles.newsItem}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.dateColumn}>
              <span className={styles.date}>{item.date}</span>
              <div className={styles.dot} />
            </div>
            <div className={styles.content}>
              <span className={styles.emoji}>{item.emoji}</span>
              <div className={styles.textArea}>
                <span
                  className={`${styles.category} ${styles[categoryColor[item.category]]}`}
                >
                  {CATEGORY_LABELS[item.category]}
                </span>
                <p className={styles.title}>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
