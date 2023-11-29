// Components
import ProductCard from '../../../components/ProductCard/ProductCard';
// Images
import iphone14ProProductImage from '../../../assets/product-iphone-14-pro.png'
import blackMagicCameraProductImage from '../../../assets/product-black-magic-camera.png';
import appleWatchProductImage from '../../../assets/product-apple-watch-series-9.png';
import airpodsProductImage from '../../../assets/product-airpods-max-silver.png';
import samsungGalaxyWatchProductImage from '../../../assets/product-samsung-galaxy-watch.png';
import galaxyZFoldProductImage from '../../../assets/product-galaxy-z-fold.png';
import galaxyBudsProductImage from '../../../assets/product-galaxy-buds-fe.png';
import appleIpadProductImage from '../../../assets/product-apple-ipad-9.png';
// SCSS
import styles from './Products.module.scss';

export default function Products() {
    return (
        <section className={styles.productsSection}>
            <div className="container">
                <ul className={styles.filters}>
                    <li className={styles.active}>New Arrival</li>
                    <li>Bestseller</li>
                    <li>Featured Products</li>
                </ul>
                <div className={styles.products}>
                    <ProductCard image={iphone14ProProductImage} productTitle='Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)' price='$900' />
                    <ProductCard image={blackMagicCameraProductImage} productTitle='Blackmagic Pocket Cinema Camera 6k' price='$2535' />
                    <ProductCard image={appleWatchProductImage} productTitle='Apple Watch Series 9 GPS 41mm Starlight Aluminium Case' price='$399' />
                    <ProductCard image={airpodsProductImage} productTitle='AirPods Max Silver' price='$549' />
                    <ProductCard image={samsungGalaxyWatchProductImage} productTitle='Samsung Galaxy Watch6 Classic 47mm Black' price='$369' />
                    <ProductCard image={galaxyZFoldProductImage} productTitle='Galaxy Z Fold5 Unlocked | 256GB | Phantom Black' price='$1799' />
                    <ProductCard image={galaxyBudsProductImage} productTitle='Galaxy Buds FE Graphite' price='$99.99' />
                    <ProductCard image={appleIpadProductImage} productTitle='Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021' price='$398' />
                </div>
            </div>
        </section>
    )
}