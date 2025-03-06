import Title from '@/components/title';
import ProductsCard from './card';
import PRODUCTS from '@/constants/products';
import styles from './index.module.scss';

const Products = () => {
  return (
    <div>
      <Title>Products</Title>
      <div className={styles.container}>
        {PRODUCTS.map((product) => (
          <ProductsCard
            key={product.id}
            isEven={product.id % 2 === 0}
            icon={product.icon}
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
