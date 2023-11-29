// Components
import ProductCard from '../../../components/ProductCard/ProductCard';
// Images
import iphone14ProGold from '../../../assets/iphone-14-pro-gold.png'
import iphone14ProWhite from '../../../assets/iphone-14-pro-white.png';
import appleWatchProductImage from '../../../assets/product-apple-watch-series-9.png';
import airpodsProductImage from '../../../assets/product-airpods-max-silver.png';
// SCSS
import styles from './Discounts.module.scss';

export default function Discounts() {
    return (
        <section className={styles.discountSection}>
            <div className="container">
                <div className={styles.discountWrapper}>
                    <h2>Discount up to -50%</h2>
                    <div className={styles.discounts}>
                        <ProductCard image={iphone14ProGold} productTitle='Apple iPhone 14 Pro 512GB Gold (MQ233)' price='$1437' />
                        <ProductCard image={airpodsProductImage} productTitle='AirPods Max Silver' price='$549' />
                        <ProductCard image={appleWatchProductImage} productTitle='Apple Watch Series 9 GPS 41mm Starlight Aluminium Case' price='$399' />
                        <ProductCard image={iphone14ProWhite} productTitle='Apple iPhone 14 Pro 1TB Gold (MQ2V3)' price='$1499' />
                    </div>
                </div>
            </div>
        </section>
    )
}