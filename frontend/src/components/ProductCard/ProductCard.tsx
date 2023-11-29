// Components
import DarkButton from '../DarkButton/DarkButton';
// React icons
import { FaRegHeart } from "react-icons/fa";
// SCSS
import styles from './ProductCard.module.scss';

type ProductCardType = {
    image: string,
    productTitle: string,
    price: string
}

export default function ProductCard({ image, productTitle, price } : ProductCardType) {
    return (
        <div className={styles.productCard}>
            <button className={styles.addFavorites}><FaRegHeart /></button>
            <div className={styles.body}>
                <img src={image} alt="" />
                <h4>{productTitle}</h4>
                <h3>{price}</h3>
            </div>
            <DarkButton>Buy Now</DarkButton>
        </div>
    )
}