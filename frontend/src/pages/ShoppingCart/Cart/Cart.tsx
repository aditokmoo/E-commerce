import CartItem from './CartItem/CartItem';
// SCSS
import styles from './Cart.module.scss';
import { useShoppingCartContext } from '../../../context/ShoppingCartContext';

export default function Cart() {
    const { cartItems  } = useShoppingCartContext();

    return (
        <div className={styles.cart}>
            <h1>Shopping Cart ({cartItems.length})</h1>
            <div className={styles.cartItems}>
                {cartItems.map((data: any, index: number) => (
                    <CartItem key={index} data={data} />
                ))}
            </div>
        </div>
    )
}