export type NewsItem = {
  id: number;
  date: string;
  title: string;
  category: 'update' | 'release' | 'blog' | 'event';
  emoji: string;
};

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    date: '2025-02-20',
    title: 'ポートフォリオサイトをリニューアルしました！',
    category: 'update',
    emoji: '🎉',
  },
  {
    id: 2,
    date: '2025-02-20',
    title: 'ダークモード対応しました',
    category: 'release',
    emoji: '🌙',
  },
  {
    id: 3,
    date: '2025-02-21',
    title: 'ウェルカムスクリーンを追加',
    category: 'release',
    emoji: '✨',
  },
];

export const CATEGORY_LABELS: Record<NewsItem['category'], string> = {
  update: 'アップデート',
  release: 'リリース',
  blog: 'ブログ',
  event: 'イベント',
};
