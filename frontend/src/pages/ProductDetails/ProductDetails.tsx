import Header from '../../components/Header/Header';
import { useGetSingleProduct } from '../../hooks/useProduct';
// SCSS
import styles from './ProductDetails.module.scss';

export default function ProductDetails() {
    const { data, isLoading } = useGetSingleProduct();

    if(isLoading) return <h2>Loading...</h2>

    console.log(data)

    return (
        <section className={styles.productDetails}>
            <Header />
            <div className={styles.container}>
                <div className={styles.details}>
                    <h2>{data.name}</h2>
                </div>
            </div> 
        </section>
    )
}