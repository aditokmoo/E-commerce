import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
// SCSS
import styles from './ShoppingCart.module.scss';

export default function ShoppingCart() {
    const getDataFromLS = localStorage.getItem('cart');
    const cartData = getDataFromLS ? JSON.parse(getDataFromLS) : [];

    return (
        <section className={styles.shoppingCart}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <Cart cartData={cartData} />
                    <Checkout />
                </div>
            </div>
        </section>
    )
}