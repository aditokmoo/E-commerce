import { useGetAllProducts } from '../../../hooks/useProduct';
// Components
import ProductCard from '../../../components/ProductCard/ProductCard';
// SCSS
import styles from './Discounts.module.scss';
import { MoonLoader } from 'react-spinners';

type dataTypes = {
    name: string,
    price: number,
    discountPrice: number,
    images: string
    _id: string,
    category: string,
}

export default function Discounts() {
    const { data: products, isLoading } = useGetAllProducts();

    if(isLoading) return <MoonLoader color="#171717" className="loader" />

    return (
        <section className={styles.discountSection}>
            <div className="container">
                <div className={styles.discountWrapper}>
                    <h2>Discount up to -50%</h2>
                    <div className={styles.discounts}>
                        {products.filter(({ discount }: number & object) => discount >= 50).reverse().slice(0, 4).map((data: dataTypes, index: number) => (
                            <ProductCard productData={data} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}