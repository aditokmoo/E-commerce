// Components
import SpecialProduct from './SpecialProduct/SpecialProduct';
// Images
import popularProductImage from '../../../assets/popular-product-image.png';
import ipadProImage from '../../../assets/ipad-pro-image.png';
import samsungGalaxyImage from '../../../assets/samsung-galaxy-image.png';
import macbookProImage from '../../../assets/macbook-image.png'
// SCSS
import styles from './Special.module.scss';

export default function Special() {
    return (
        <section className={styles.specialSection}>
            <SpecialProduct image={popularProductImage} title='Popular Products' text='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.' />
            <SpecialProduct image={ipadProImage} title='Ipad Pro' text='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.' />
            <SpecialProduct image={samsungGalaxyImage} title='Samsung Galaxy' text='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.' />
            <SpecialProduct image={macbookProImage} title='Macbook Pro' text='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.' />
        </section>
    )
}