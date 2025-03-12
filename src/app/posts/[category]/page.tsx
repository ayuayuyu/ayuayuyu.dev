import Cards from '@/components/cards';

type PostsProps = {
  params: { category: string }; // paramsの型定義
};
export default function Home({ params }: PostsProps) {
  if (!params.category) {
    return <div>ページが見つかりません</div>;
  }
  return <Cards category={params.category}>投稿一覧</Cards>;
}
