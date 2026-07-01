'use client';

import { useSyncExternalStore } from 'react';
import styles from './index.module.scss';

type Theme = 'light' | 'dark';

// テーマは html[data-theme] / localStorage / OS設定 という「外部状態」なので
// useSyncExternalStore で購読する（effect 内 setState を避け、hydration も安全）
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', onChange);
  window.addEventListener('themechange', onChange);
  return () => {
    mq.removeEventListener('change', onChange);
    window.removeEventListener('themechange', onChange);
  };
};

const readTheme = (): Theme => {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'dark' || attr === 'light') return attr;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const ThemeToggle = () => {
  // SSR/hydration 時は未確定(null) → サーバHTMLと一致させチラつきを防ぐ
  const theme = useSyncExternalStore<Theme | null>(
    subscribe,
    readTheme,
    () => null,
  );

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
    window.dispatchEvent(new Event('themechange'));
  };

  const isDark = theme === 'dark';
  const label = isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {theme !== null &&
        (isDark ? (
          // moon
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z"
              fill="currentColor"
            />
          </svg>
        ) : (
          // sun
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="12" y1="2.5" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="21.5" />
              <line x1="2.5" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="21.5" y2="12" />
              <line x1="5.1" y1="5.1" x2="6.8" y2="6.8" />
              <line x1="17.2" y1="17.2" x2="18.9" y2="18.9" />
              <line x1="18.9" y1="5.1" x2="17.2" y2="6.8" />
              <line x1="6.8" y1="17.2" x2="5.1" y2="18.9" />
            </g>
          </svg>
        ))}
    </button>
  );
};

export default ThemeToggle;
