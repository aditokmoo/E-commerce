// React icons
import { FaRegTrashAlt, FaStar, FaRegEdit } from "react-icons/fa";
// SCSS
import styles from './Product.module.scss';
import { Link } from "react-router-dom";

export default function Product({ data }: any) {
    console.log(data)
    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                <span className={styles.deleteIcon}><FaRegTrashAlt /></span>
                <h3>-25%</h3>
                <img src={`http://localhost:8000/${data.image}`} alt="" />
            </div>
            <div className={styles.productData}>
                <h4>{data.name}</h4>
                <div className={styles.icons}>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.starIcon}><FaStar /></span>
                    <span className={styles.reviewNum}>(56)</span>
                </div>
                <div className={styles.price}>
                    <span className={styles.newPrice}>${data.discountPrice}</span>
                    <span className={styles.originalPrice}>${data.price}</span>
                </div>
                <Link to='/' className={styles.editBtn}><FaRegEdit />Edit Product</Link>
            </div>
        </div>
    )
}