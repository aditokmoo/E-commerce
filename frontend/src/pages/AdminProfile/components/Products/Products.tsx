// SCSS
import { useGetAllProducts } from '../../../../hooks/useProduct';
import Product from './Product/Product';
import ProductFilter from './ProductFilter/ProductFilter';
import styles from './Products.module.scss';

export default function Products() {
    const { data: products, isLoading } = useGetAllProducts();

    if(isLoading) return <h2>Loading...</h2>

    return (
        <div className={styles.productSection}>
            <ProductFilter />
            <div className={styles.products}>
                {products?.map((productData: any, index: number) => (
                    <Product key={index} data={productData} />
                ))}
                {!products && <h2>No Products</h2>}
            </div>
        </div>
    )
}