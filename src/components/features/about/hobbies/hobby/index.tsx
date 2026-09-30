import type { CSSProperties } from 'react';
import type { Hobby } from '@/constants/hobbys';
import styles from './index.module.scss';

type HobbyCardProps = Omit<Hobby, 'id'> & {
  index: number;
};

const HobbyCard = ({
  icon: Icon,
  title,
  subtitle,
  tags,
  highlight,
  description,
  index,
}: HobbyCardProps) => {
  return (
    <article className={styles.card} style={{ '--i': index } as CSSProperties}>
      <div className={styles.band} aria-hidden="true">
        <span className={styles.number}>
          HOBBY {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <span className={styles.icon} aria-hidden="true">
        <Icon />
      </span>
      <div className={styles.body}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        <dl className={styles.highlight}>
          <dt className={styles.highlightLabel}>{highlight.label}</dt>
          <dd className={styles.highlightValue}>{highlight.value}</dd>
        </dl>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
export default HobbyCard;
