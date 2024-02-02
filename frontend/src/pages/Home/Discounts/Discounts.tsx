import { useGetAllProducts } from '../../../hooks/useProduct';
// Components
import ProductCard from '../../../components/ProductCard/ProductCard';
// SCSS
import styles from './Discounts.module.scss';

type dataTypes = {
    name: string,
    price: number,
    image: string
}

export default function Discounts() {
    const { data: products, isLoading } = useGetAllProducts();

    if(isLoading) return <h2>Loading...</h2>

    return (
        <section className={styles.discountSection}>
            <div className="container">
                <div className={styles.discountWrapper}>
                    <h2>Discount up to -50%</h2>
                    <div className={styles.discounts}>
                        {products.filter(({ discount }: number & object) => discount >= 50).map((data: dataTypes, index: number) => (
                            <ProductCard productData={data} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}