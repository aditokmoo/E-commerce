// React icons
import { IoAddCircleOutline } from "react-icons/io5";
import { FaSearch } from 'react-icons/fa';
// SCSS
import styles from './ProductFilter.module.scss';
import { useState } from "react";
import { createPortal } from "react-dom";
import AddProductModal from "../AddProductModal/AddProductModal";

export default function ProductFilter() {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className={styles.productFilter}>
            <h2>Products <span className={styles.productQuantity}>(43)</span></h2>
            <div className={styles.options}>
                <form>
                    <span className={styles.searchIcon}><FaSearch /></span>
                    <input type="text" placeholder='Search products' className={styles.searchInput} />
                </form>
                <button className={styles.addProduct} onClick={() => setShowModal(true)}><IoAddCircleOutline />Add Product</button>
            </div>
            {showModal && createPortal(
                <AddProductModal setShowModal={setShowModal} />,
                document.body
            )}
        </div>
    )
}