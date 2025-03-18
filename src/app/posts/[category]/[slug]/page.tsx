import { getAllSlug } from '@/libs/get-all-slug';
import { getMarkdown } from '@/libs/get-markdown';
import { markdownToHtml } from '@/libs/markdown-to-html';
import styles from './style.module.scss';

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
  const resolvedParams = await props.params; // ✅ `params` を `await` して解決
  const { category, slug } = resolvedParams;

  if (!slug || !category) {
    return <div>ページが見つかりません</div>;
  }

  // 🔹 getMarkdown の戻り値が null の場合を考慮
  const markdownData = getMarkdown(`contents/${slug}.html.md`);
  const markdownContent = markdownData?.content;

  if (!markdownContent) {
    return <div>ページが見つかりません</div>;
  }
  const htmlContent = await markdownToHtml(markdownContent);

  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
