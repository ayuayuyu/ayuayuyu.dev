import TitleLayout from '@/components/title';
import ProductsCard from './card';
import PRODUCTS from '@/constants/products';
import styles from './index.module.scss';

const Products = () => {
  return (
    <div>
      <TitleLayout>Products</TitleLayout>
      <div className={styles.container}>
        {PRODUCTS.map((product) => (
          <ProductsCard
            key={product.id}
            isEven={product.id % 2 === 0}
            icon={product.icon.src}
            title={product.title}
            link={product.link}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Products;
