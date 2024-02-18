import { useShoppingCartContext } from '../../../context/ShoppingCartContext';
// SCSS
import styles from './Checkout.module.scss';

export default function Checkout() {
    const { subTotalPrice, taxPrice, totalPrice, shippingPrice } = useShoppingCartContext();

    return (
        <div className={styles.checkout}>
            <h2>Order Summary</h2>
            <div className={styles.col}>
                <span className={styles.subtotal}>Subtotal</span>
                <span className={styles.price}>${subTotalPrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className={styles.col}>
                <span className={styles.estimated_tax}>Estimated Tax</span>
                <span className={styles.price}>${taxPrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className={styles.col}>
                <span className={styles.estimated_shipping}>Estimated shipping & Handling</span>
                <span className={styles.price}>${shippingPrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className={styles.col}>
                <span className={styles.total}>Total</span>
                <span className={styles.price}>${totalPrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <button className={styles.checkoutBtn}>Checkout</button>
        </div>
    )
}