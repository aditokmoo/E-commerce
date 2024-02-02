import { useGetAllProducts } from '../../../../hooks/useProduct';
import { createProductType } from '../../../../shared/Types/types';
import Product from './Product/Product';
import ProductFilter from './ProductFilter/ProductFilter';
// SCSS
import styles from './Products.module.scss';

export default function Products() {
    const { data: products, isLoading } = useGetAllProducts();

    if(isLoading) return <h2>Loading...</h2>

    return (
        <div className={styles.productSection}>
            <ProductFilter />
            <div className={styles.products}>
                {products?.map((productData: createProductType, index: number) => (
                    <Product key={index} data={productData} />
                ))}
                {!products && <h2>No Products</h2>}
            </div>
        </div>
    )
}