import { useShoppingCartContext } from '../../../context/ShoppingCartContext';
// SCSS
import styles from './Checkout.module.scss';

export default function Checkout() {
    return (
        <div className={styles.checkout}>
            <h2>Order Summary</h2>
            <div className={styles.col}>
                <span className={styles.subtotal}>Subtotal</span>
                <span className={styles.price}>$100</span>
            </div>
            <div className={styles.col}>
                <span className={styles.estimated_tax}>Estimated Tax</span>
                <span className={styles.price}>$100</span>
            </div>
            <div className={styles.col}>
                <span className={styles.estimated_shipping}>Estimated shipping & Handling</span>
                <span className={styles.price}>$100</span>
            </div>
            <div className={styles.col}>
                <span className={styles.total}>Total</span>
                <span className={styles.price}>$100</span>
            </div>
            <button className={styles.checkoutBtn}>Checkout</button>
        </div>
    )
}