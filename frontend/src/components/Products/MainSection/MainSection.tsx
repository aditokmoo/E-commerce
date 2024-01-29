
import ProductCard from '../../ProductCard/ProductCard';
// SCSS
import styles from './MainSection.module.scss';

type MainSectionType = {
    products: {
        productImage: string,
        productName: string,
        price: string
    }[]
}

export default function MainSection({ products } : MainSectionType) {
    return (
        <div className={styles.mainSection}>
            <div className={styles.products}>
                {products?.map((product, index) => (
                    <ProductCard key={index} productData={product}  />
                ))}
            </div>
        </div>
    )
}