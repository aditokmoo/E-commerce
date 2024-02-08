import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
// SCSS
import styles from './ShoppingCart.module.scss';

export default function ShoppingCart() {
    return (
        <section className={styles.shoppingCart}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <Cart />
                    <Checkout />
                </div>
            </div>
        </section>
    )
}