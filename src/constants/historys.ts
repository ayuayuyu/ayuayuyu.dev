// 章の中をさらに分けるときのグループ（例: インターンシップ → サマー / 長期）
const INTERNSHIP_GROUPS = [
  { id: 'summer', title: 'サマーインターン', label: 'SUMMER' },
  { id: 'longTerm', title: '長期インターン', label: 'LONG-TERM' },
] as const;

export type HistoryGroupId = (typeof INTERNSHIP_GROUPS)[number]['id'];

export type HistoryGroup = {
  id: HistoryGroupId;
  title: string;
  label: string;
};

export type HistoryChapter = {
  id: string;
  title: string;
  label: string;
  groups?: readonly HistoryGroup[];
};

export const HISTORY_CHAPTERS = [
  { id: 'childhood', title: '幼少〜中学', label: 'CHILDHOOD' },
  { id: 'highSchool', title: '高校', label: 'HIGH SCHOOL' },
  { id: 'university', title: '大学', label: 'UNIVERSITY' },
  {
    id: 'internship',
    title: 'インターンシップ',
    label: 'INTERNSHIP',
    groups: INTERNSHIP_GROUPS,
  },
] as const satisfies readonly HistoryChapter[];

export type HistoryChapterId = (typeof HISTORY_CHAPTERS)[number]['id'];

// milestone: 入学・配属などの節目（カード表示） / event: 部活などの出来事（行表示）
export type HistoryKind = 'milestone' | 'event';

export type HistoryItem = {
  id: number;
  chapter: HistoryChapterId;
  group?: HistoryGroupId;
  kind: HistoryKind;
  current?: boolean;
  title: string;
  organization: string;
  link: string;
  description: string;
  year: number;
  month: number;
};

const HISTORYS: HistoryItem[] = [
  {
    id: 0,
    chapter: 'childhood',
    kind: 'milestone',
    title: '誕生',
    organization: '',
    link: '',
    description: '愛知県で生まれる',
    year: 2004,
    month: 7,
  },
  {
    id: 1,
    chapter: 'childhood',
    kind: 'milestone',
    title: '小学校 入学',
    organization: '',
    link: '',
    description: 'ものづくりに興味を持つ',
    year: 2011,
    month: 4,
  },
  {
    id: 2,
    chapter: 'childhood',
    kind: 'milestone',
    title: '中学校 入学',
    organization: '',
    link: '',
    description: 'バレー部に入って運動をしていました。',
    year: 2017,
    month: 4,
  },
  {
    id: 3,
    chapter: 'highSchool',
    kind: 'milestone',
    title: '名古屋工業高等学校 入学',
    organization: '名工',
    link: 'https://nagoya-th.ed.jp/',
    description: '情報科に入学する',
    year: 2020,
    month: 4,
  },
  {
    id: 4,
    chapter: 'highSchool',
    kind: 'event',
    title: 'パソコン部 入部',
    organization: '',
    link: '',
    description: 'HTMLやCSSの勉強をしていました。',
    year: 2020,
    month: 4,
  },
  {
    id: 5,
    chapter: 'highSchool',
    kind: 'event',
    title: 'イラストレーション部 転部',
    organization: '',
    link: '',
    description: 'blenderやUnityなどで3D制作を行なっていました。',
    year: 2021,
    month: 5,
  },
  {
    id: 6,
    chapter: 'university',
    kind: 'milestone',
    title: '愛知工業大学 入学',
    organization: 'AIT',
    link: 'https://www.ait.ac.jp/',
    description: '情報科学部 情報科学科\nコンピューターシステム専攻に入学',
    year: 2023,
    month: 4,
  },
  {
    id: 7,
    chapter: 'university',
    kind: 'event',
    title: 'システム工学研究会 入部',
    organization: 'Sysken',
    link: 'https://www.sysken.net/',
    description:
      'ハッカソンや個人開発をして、好きなことをやって日々過ごしています。',
    year: 2023,
    month: 4,
  },
  {
    id: 8,
    chapter: 'university',
    kind: 'milestone',
    title: '内藤研究室 配属',
    organization: 'PlusLab',
    link: 'https://pluslab.org/',
    description:
      '主にネットワークの研究をしています。\n様々なイベントを行って楽しんでいる研究室です。',
    year: 2025,
    month: 5,
  },
  {
    id: 9,
    chapter: 'internship',
    group: 'summer',
    kind: 'event',
    title: 'Safie アイデアソン',
    organization: 'Safie',
    link: 'https://note.com/safie_/n/n0bbaa37e2b32',
    description: '7月10日〜11日（2日間）',
    year: 2025,
    month: 7,
  },
  {
    id: 10,
    chapter: 'internship',
    group: 'summer',
    kind: 'event',
    title: 'DMM Sprint_GO',
    organization: 'DMM',
    link: 'https://dmm.snar.jp/jobboard/detail.aspx?id=qlC5uNGeIAbwM_Y2rJcPEg',
    description: '8月4日〜8日（5日間）',
    year: 2025,
    month: 8,
  },
  {
    id: 11,
    chapter: 'internship',
    group: 'summer',
    kind: 'event',
    title: 'フラー サマーインターンシップ（サーバーサイド）',
    organization: 'フラー',
    link: 'https://www.fuller-inc.com/news/202504-fuller-engineer-internship-2025',
    description: '8月18日〜22日（5日間）',
    year: 2025,
    month: 8,
  },
  {
    id: 12,
    chapter: 'internship',
    group: 'summer',
    kind: 'event',
    title: 'SmartHR サマーインターン',
    organization: 'SmartHR',
    link: 'https://tech.smarthr.jp/entry/2025/12/04/150705',
    description: '8月26日〜29日（4日間）',
    year: 2025,
    month: 8,
  },
  {
    id: 13,
    chapter: 'internship',
    group: 'summer',
    kind: 'event',
    title: 'Media Do サマーインターン',
    organization: 'Media Do',
    link: '',
    description: '',
    year: 2025,
    month: 9,
  },
  {
    id: 14,
    chapter: 'internship',
    group: 'longTerm',
    kind: 'event',
    current: true,
    title: '燈株式会社 長期インターン',
    organization: '燈',
    link: 'https://akariinc.co.jp/',
    description: '燈株式会社で長期インターンをしています。',
    year: 2025,
    month: 10,
  },
];

export default HISTORYS;
