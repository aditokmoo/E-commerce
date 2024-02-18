import { FaPlus, FaTimes } from 'react-icons/fa';
import { TiMinus } from 'react-icons/ti';
import { useShoppingCartContext } from '../../../context/ShoppingCartContext';
import ProductItem from '../../../components/ProductItem/ProductItem';
// SCSS
import styles from './Cart.module.scss';

export default function Cart() {
    const { cartItems, cartItemsQuantity } = useShoppingCartContext();
    
    return (
        <div className={styles.cart}>
            <h1>Shopping Cart ({cartItems.length})</h1>
            <div className={styles.cartItems}>
                {cartItems.map((data: any, index: number) => {
                const price = data.discountPrice ? data.discountPrice * cartItemsQuantity[data._id] : data.price * cartItemsQuantity[data._id]
                    
                 return (
                    <ProductItem key={index} >
                        <ProductItem.Image image={data.images[0]} />
                        <ProductItem.Name>{data.name}</ProductItem.Name>
                        <div className={styles.counter}>
                            <ProductItem.RemoveQunatity dataId={data._id}><TiMinus /></ProductItem.RemoveQunatity>
                            <ProductItem.QunatityInput quantity={cartItemsQuantity} dataId={data._id} />
                            <ProductItem.AddQuantity dataId={data._id}><FaPlus /></ProductItem.AddQuantity>
                        </div>
                        <ProductItem.Price>{price}</ProductItem.Price>
                        <ProductItem.Remove data={data}><FaTimes /></ProductItem.Remove>
                    </ProductItem>
                )})}
            </div>
        </div>
    )
}