// Components
import DarkButton from '../DarkButton/DarkButton';
// React icons
import { FaRegHeart } from "react-icons/fa";
// SCSS
import styles from './ProductCard.module.scss';

export default function ProductCard({ productData } : any) {
    return (
        <div className={styles.productCard}>
            <button className={styles.addFavorites}><FaRegHeart /></button>
            <div className={styles.body}>
                <img src={`http://localhost:8000/${productData?.image}`} alt="" />
                <h4>{productData?.name}</h4>
                <h3>${productData?.price}</h3>
            </div>
            <DarkButton>Buy Now</DarkButton>
        </div>
    )
}