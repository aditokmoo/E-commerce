// SCSS
import { Link } from 'react-router-dom';
import styles from './ProductFilter.module.scss';
import { IoAddCircleOutline } from "react-icons/io5";
import { FaSearch } from 'react-icons/fa';

export default function ProductFilter() {
    return (
        <div className={styles.productFilter}>
            <h2>Products <span className={styles.productQuantity}>(43)</span></h2>
            <div className={styles.options}>
                <form>
                    <span className={styles.searchIcon}><FaSearch /></span>
                    <input type="text" placeholder='Search products' className={styles.searchInput} />
                </form>
                <Link to='/' className={styles.addProduct}><IoAddCircleOutline />Add Product</Link>
            </div>
        </div>
    )
}