import CartItem from './CartItem/CartItem';
// SCSS
import styles from './Cart.module.scss';

type propTypes = {
    cartData: any
}

export default function Cart({ cartData }: propTypes) {
    console.log(cartData)
    return (
        <div className={styles.cart}>
            <h1>Shopping Cart</h1>
            <div className={styles.cartItems}>
                {cartData.map((data: any, index: number) => (
                    <CartItem key={index} data={data} />
                ))}
            </div>
        </div>
    )
}