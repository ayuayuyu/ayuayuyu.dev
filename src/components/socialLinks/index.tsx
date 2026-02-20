'use client';

import styles from './index.module.scss';
import { GitLink, XLink, QiitaLink, ZennLink } from '@/constants/link';

type SocialItem = {
  name: string;
  url: string;
  icon: string;
  color: string;
};

const socials: SocialItem[] = [
  { name: 'X', url: XLink, icon: '𝕏', color: '#1da1f2' },
  { name: 'GitHub', url: GitLink, icon: '⌘', color: '#6e5494' },
  { name: 'Qiita', url: QiitaLink, icon: 'Q', color: '#55c500' },
  { name: 'Zenn', url: ZennLink, icon: 'Z', color: '#3ea8ff' },
];

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
          style={{ '--social-color': social.color } as React.CSSProperties}
          aria-label={social.name}
        >
          <span className={styles.icon}>{social.icon}</span>
          <span className={styles.name}>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
