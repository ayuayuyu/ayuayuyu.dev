import Cards from '@/components/cards';
import { getAllSlug } from '@/libs/get-all-slug';
import { getMarkdown } from '@/libs/get-markdown';

type PostsProps = {
  params: Promise<{ category: string }>; // params を Promise に
};
export async function generateStaticParams(): Promise<{ category: string }[]> {
  const slugs = getAllSlug('contents');
  const cards = (
    await Promise.all(
      slugs.map(async (slug) => {
        const markdown = await getMarkdown(`contents/${slug}.html.md`);
        if (!markdown) {
          return null;
        }
        const { data } = markdown;
        return {
          category: data.category || '',
        };
      }),
    )
  ).filter((card): card is NonNullable<typeof card> => card !== null);

  return cards;
}

export default async function Home(props: PostsProps) {
  const resolvedParams = await props.params;
  const { category } = resolvedParams;
  return <Cards category={category}>投稿一覧</Cards>;
}
