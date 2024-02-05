import Header from '../../components/Header/Header';
import { useGetSingleProduct } from '../../hooks/useProduct';
import MainDetails from './MainDetails/MainDetails';
// SCSS
import styles from './ProductDetails.module.scss';

export default function ProductDetails() {
    const { data, isLoading } = useGetSingleProduct();

    if(isLoading) return <h2>Loading...</h2>

    return (
        <section className={styles.productDetails}>
            <Header />
            <div className={styles.container}>
                <div className={styles.detailsSection}>
                    <MainDetails data={data.product} products={data.products} />
                </div>
            </div> 
        </section>
    )
}