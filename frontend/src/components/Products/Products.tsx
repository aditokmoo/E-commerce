// Components
import MainFilter from './MainFilter/MainFilter';
import MainSection from './MainSection/MainSection';
// SCSS
import styles from './Products.module.scss';

interface ProductsType {
    products: {
        productImage: string;
        productName: string;
        price: string;
    }[]
}

export default function Products({ products }: ProductsType) {
    return (
        <section className={styles.main}>
            <MainFilter products={products} />
            <MainSection products={products} />
        </section>
    )
}