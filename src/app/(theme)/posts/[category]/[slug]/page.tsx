import { getAllSlug } from '@/libs/get-all-slug';
import { getMarkdown } from '@/libs/get-markdown';
import { markdownToHtml } from '@/libs/markdown-to-html';
import ArticleLayout from '@/components/articleLayout';
import '@/styles/md-styles.scss';

export async function generateStaticParams(): Promise<
  { category: string; slug: string }[]
> {
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
          slug,
          category: data.category || '',
        };
      }),
    )
  ).filter((card): card is NonNullable<typeof card> => card !== null);

  return cards;
}

export default async function BlogDetailPage(props: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const resolvedParams = await props.params;
  const { category, slug } = resolvedParams;

  if (!slug || !category) {
    return <div>ページが見つかりません</div>;
  }

  const markdownData = getMarkdown(`contents/${slug}.html.md`);

  if (!markdownData?.content) {
    return <div>ページが見つかりません</div>;
  }

  const { data } = markdownData;
  const htmlContent = await markdownToHtml(markdownData.content);

  return (
    <ArticleLayout
      title={data.title || '無題'}
      date={data.date || ''}
      tag={data.tag || ''}
      category={category}
    >
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </ArticleLayout>
  );
}
