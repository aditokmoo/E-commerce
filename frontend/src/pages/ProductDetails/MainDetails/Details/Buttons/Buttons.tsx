import { useHandleAddToCart } from '../../../../../hooks/useHandleAddToCart';
// SCSS
import styles from './Buttons.module.scss';

type propTypes = {
    data: {
        name: string,
        discountPrice: number,
        price: number,
        desc: string,
        _id: string
    }
}

export default function Buttons({ data }: propTypes) {
    const { handleAddToCart } = useHandleAddToCart();

    return (
        <div className={styles.btns}>
            <button className={styles.wishlist}>Add to Wishlist</button>
            <button 
                className={styles.buy}
                onClick={() => handleAddToCart(data)}
            >
                    Add to Cart
            </button>
        </div>
    )
}