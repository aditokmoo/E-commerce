// SCSS
import styles from './Buttons.module.scss';

export default function Buttons() {
    return (
        <div className={styles.btns}>
            <button className={styles.wishlist}>Add to Wishlist</button>
            <button className={styles.buy}>BUY</button>
        </div>
    )
}