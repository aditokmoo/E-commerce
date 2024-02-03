// SCSS
import styles from './Price.module.scss';

type propTypes = {
    price: number,
    discountPrice: number
}

export default function Price({ price, discountPrice }: propTypes) {
    return discountPrice ? (
            <div className={styles.price}>
                <span className={styles.new}>${discountPrice}</span>
                <span className={styles.old}>${price}</span>
            </div>
        ) : (
            <div className={styles.price}>
                <span className={styles.new}>${price}</span>
            </div>
        )
}