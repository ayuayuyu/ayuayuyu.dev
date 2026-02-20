import GradientTitle from '@/components/gradientTitle';
import ProductsCard from './card';
import { getAllSlug } from '@/libs/get-all-slug';
import { getMarkdown } from '@/libs/get-markdown';
import styles from './index.module.scss';

const Products = async () => {
  const slugs = getAllSlug(`contents`);

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
          title: data.title || 'No Title',
          tag: data.tag || '',
          date: data.date || 'No Date',
          imageUrl: data.thumbnail || '/default/icon.webp',
          description: data.overview || '',
          category: data.category || '',
        };
      }),
    )
  ).filter((card): card is NonNullable<typeof card> => card !== null);

  const category = 'product';

  const filteredCards = cards.filter((card) => card.category === category);

  return (
    <div>
      <GradientTitle subtitle="― プロダクト ―">Products</GradientTitle>
      <div className={styles.container}>
        {filteredCards.map(
          ({ title, slug, imageUrl, description, category }, i) => (
            <ProductsCard
              key={i}
              isEven={i % 2 === 0}
              title={title}
              imageUrl={imageUrl}
              link={`/posts/${category}/${slug}`} // link を適切に設定
              description={description}
            />
          ),
        )}
      </div>
    </div>
  );
};
export default Products;
