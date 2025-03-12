import Cards from '@/components/cards';

type PostsProps = {
  params: Promise<{ category: string }>; // params を Promise に
};

export const runtime = 'nodejs'; // Edge ではなく Node.js を使用

export default async function Home(props: PostsProps) {
  const resolvedParams = await props.params;
  const { category } = resolvedParams;

  if (!category) {
    return <div>ページが見つかりません</div>;
  }

  return <Cards category={category}>投稿一覧</Cards>;
}
