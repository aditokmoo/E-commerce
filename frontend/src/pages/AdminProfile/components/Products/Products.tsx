// SCSS
import { products } from '../../../../utils/data';
import Product from './Product/Product';
import ProductFilter from './ProductFilter/ProductFilter';
import styles from './Products.module.scss';

export default function Products() {
    return (
        <div className={styles.productSection}>
            <ProductFilter />
            <div className={styles.products}>
                {products.map((productData: any, index: number) => (
                    <Product key={index} data={productData} />
                ))}
            </div>
        </div>
    )
}