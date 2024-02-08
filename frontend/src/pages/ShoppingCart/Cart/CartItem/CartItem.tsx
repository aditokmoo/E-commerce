import { useState } from 'react';
// React icons
import { FaTimes } from 'react-icons/fa';
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
// SCSS
import styles from './CartItem.module.scss';

type propTypes = {
    data: any
}

export default function CartItem({ data }: propTypes) {
    const [ quantity, setQuantity ] = useState(1);

    return (
        <div className={styles.cartItem}>
            <img src={`http://localhost:8000/${data.images[0]}`} className={styles.image} alt="" />
            <h3 className={styles.name}>{data.name}</h3>
            <div className={styles.counter}>
                <button 
                    className={styles.btnDown} 
                    onClick={() => setQuantity(prevState => prevState >= 2 ? prevState - 1 : 1)}
                >
                    <TiMinus />
                </button>
                <input 
                    type="text" 
                    name='quantity' 
                    id='quantity' 
                    onChange={(e: any) => setQuantity(e.target.value)} 
                    value={quantity} 
                    readOnly
                />
                <button 
                    className={styles.btnUp} 
                    onClick={() => setQuantity(prevState => prevState <= 99 ? prevState + 1 : 100 )}
                >
                    <FaPlus />
                </button>
            </div>
            <span className={styles.price}>${data.discountPrice ? data.discountPrice * quantity : data.price * quantity}</span>
            <span className={styles.removeBtn}><FaTimes /></span>
        </div>
    )
}