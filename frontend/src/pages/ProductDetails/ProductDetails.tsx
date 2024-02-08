import { MoonLoader } from 'react-spinners';
import { useGetSingleProduct } from '../../hooks/useProduct';
import MainDetails from './MainDetails/MainDetails';
// SCSS
import styles from './ProductDetails.module.scss';

export default function ProductDetails() {
    const { data, isLoading } = useGetSingleProduct();

    if(isLoading) return <MoonLoader color="#171717" className="loader" />

    return (
        <section className={styles.productDetails}>
            <div className={styles.container}>
                <div className={styles.detailsSection}>
                    <MainDetails data={data.product} products={data.products} />
                </div>
            </div> 
        </section>
    )
}