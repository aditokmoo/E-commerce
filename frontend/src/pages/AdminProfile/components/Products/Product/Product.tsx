import { Link } from "react-router-dom";
// React icons
import { FaRegTrashAlt, FaStar, FaRegEdit } from "react-icons/fa";
// SCSS
import styles from './Product.module.scss';

interface propsType {
    data: {
        discount: number,
        images: string,
        name: string,
        discountPrice: number,
        originalPrice: number,
        price: number
        reviews: []
    }
}

export default function Product({ data }: propsType) {
    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                <span className={styles.deleteIcon}><FaRegTrashAlt /></span>
                {data.discount ? (
                    <h3>-{data.discount}%</h3>
                ) : null}
                <img src={`http://localhost:8000/${data.images[0]}`} alt="" />
            </div>
            <div className={styles.productData}>
                <h4>{data.name}</h4>
                <div className={styles.icons}>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.reviewNum}>({data.reviews.length})</span>
                </div>
                <div className={styles.price}>
                    <span className={styles.newPrice}>${data.discountPrice}</span>
                    {data.discountPrice !== data.price && <span className={styles.originalPrice}>${data.price}</span>}
                </div>
                <Link to='/' className={styles.editBtn}><FaRegEdit />Edit Product</Link>
            </div>
        </div>
    )
}