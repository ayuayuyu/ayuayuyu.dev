import type { ComponentType, SVGProps } from 'react';
import { Gamepad, Tv } from './svgIcon';

export type Hobby = {
  id: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  tags: string[];
  // カード中段で一番伝えたいこと（例: BEST ERA / 2016 — 2019）
  highlight: { label: string; value: string };
  description: string;
};

const HOBBIES: Hobby[] = [
  {
    id: 0,
    icon: Tv,
    title: 'Anime',
    subtitle: 'アニメ',
    tags: ['恋愛系', '異世界系', 'バトル系'],
    highlight: { label: 'BEST ERA', value: '2016 — 2019' },
    description:
      '恋愛系、異世界系、バトル系のアニメが特に好きです。2016年~2019年くらいのアニメが特に最高だったと思っています。',
  },
  {
    id: 1,
    icon: Gamepad,
    title: 'Game',
    subtitle: 'ゲーム',
    tags: ['モンハン4G', 'ワールド / アイスボーン', 'RPG'],
    highlight: { label: 'FAVORITE', value: 'モンハン' },
    description:
      'モンハンというゲームが特に好きでモンハン4Gやモンハンワールド/アイスボーンは特にハマり中学生の青春を全て捧げたと言っても過言ではありません。RPGゲームなども好きです。',
  },
];

export default HOBBIES;
