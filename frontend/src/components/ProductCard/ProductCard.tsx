// Components
import DarkButton from '../DarkButton/DarkButton';
// React icons
import { FaRegHeart } from "react-icons/fa";
// SCSS
import styles from './ProductCard.module.scss';

type propTypes = {
    productData: {
        name: string,
        price: number,
        images: string
        _id: string,
        category: string,
    }
}

export default function ProductCard({ productData } : propTypes) {
    console.log(productData._id)
    return (
        <div className={styles.productCard}>
            <button className={styles.addFavorites}><FaRegHeart /></button>
            <div className={styles.body}>
                <img src={`http://localhost:8000/${productData?.images[0]}`} alt="" />
                <h4>{productData?.name}</h4>
                <h3>${productData?.price}</h3>
            </div>
            <DarkButton productId={productData._id} productCategory={productData.category}>Buy Now</DarkButton>
        </div>
    )
}