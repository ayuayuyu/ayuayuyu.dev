import Cards from '@/components/cards';

type PostsProps = {
  params: Promise<{ category: string }>; // params を Promise に
};
export async function generateStaticParams(): Promise<{ category: string }[]> {
  const categories = ['project', 'product', 'private'];

  return categories.map((category) => ({
    category,
  }));
}

export default async function Home(props: PostsProps) {
  const resolvedParams = await props.params;
  const { category } = resolvedParams;
  return <Cards category={category}>投稿一覧</Cards>;
}
