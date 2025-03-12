import { getAllSlug } from '@/libs/get-all-slug';
import { getMarkdown } from '@/libs/get-markdown';
import { markdownToHtml } from '@/libs/markdown-to-html';

interface BlogDetailPageProps {
  params: { category: string; slug: string };
}

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

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  if (!params.slug || !params.category) {
    return <div>ページが見つかりません</div>;
  }

  const markdownContent = getMarkdown(`contents/${params.slug}.md`).content;
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
