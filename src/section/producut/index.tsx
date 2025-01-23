import ProductCard from "./card";
import ProductsInfo from "@/constans/productsInfo";
import styles from "./index.module.scss";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Products</div>
      <div className={styles.products}>
        {ProductsInfo.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
            gitUrl={product.gitUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
