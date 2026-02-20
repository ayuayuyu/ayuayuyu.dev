import Link from 'next/link';
import TagLayout from '@/components/tag';
import { formattedDate } from '@/utils/formattes';
import styles from './index.module.scss';

type ArticleLayoutProps = {
  children: React.ReactNode;
  title: string;
  date: string;
  tag: string;
  category: string;
};

const categoryLabels: Record<string, string> = {
  private: 'プライベート',
  project: 'プロジェクト',
  product: 'プロダクト',
  award: '受賞',
};

const ArticleLayout = ({
  children,
  title,
  date,
  tag,
  category,
}: ArticleLayoutProps) => {
  const displayDate = date ? formattedDate(date) : '';
  const categoryLabel = categoryLabels[category] || category;

  return (
    <article className={styles.article}>
      <div className={styles.backNav}>
        <Link href={`/posts/${category}`} className={styles.backLink}>
          <span className={styles.arrow}>←</span>
          <span>{categoryLabel}一覧へ</span>
        </Link>
      </div>

      <header className={styles.header}>
        <div className={styles.meta}>
          {tag && (
            <div className={styles.tag}>
              <TagLayout>{tag}</TagLayout>
            </div>
          )}
          {displayDate && <time className={styles.date}>{displayDate}</time>}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.divider} />
      </header>

      <div className={styles.content}>{children}</div>
    </article>
  );
};

export default ArticleLayout;
