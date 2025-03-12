import { getAllSlug } from '@/libs/get-all-slug';
import { getMarkdown } from '@/libs/get-markdown';
import { markdownToHtml } from '@/libs/markdown-to-html';

export async function generateStaticParams(): Promise<
  { category: string; slug: string }[]
> {
  const slugs = getAllSlug('contents');
  const categories = ['project', 'product', 'private', 'all'];

  return categories.flatMap((category) =>
    slugs.map((slug) => ({
      category,
      slug,
    })),
  );
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
  const markdownData = getMarkdown(`contents/${slug}.md`);
  const markdownContent = markdownData?.content;

  if (!markdownContent) {
    return <div>ページが見つかりません</div>;
  }
  const htmlContent = await markdownToHtml(markdownContent);

  return (
    <div
      className="container"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
