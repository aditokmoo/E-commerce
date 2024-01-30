// SCSS
import styles from './BasicInfo.module.scss';

export default function BasicInfo() {
    return (
        <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
                <label htmlFor="name">Product name *</label>
                <input type="text" id='name' />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="category">Product category *</label>
                <select id="category">
                    <option value="">Please select category</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="computer">Computer</option>
                </select>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.inputContainer}>
                    <label htmlFor="type">Type *</label>
                    <select id="type">
                        <option value="">Please select type</option>
                        <option value="new">New</option>
                        <option value="bestseller">Best seller</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="colors">Colors *</label>
                    <select id="colors">
                        <option value="">Please select colors</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="price">Price *</label>
                    <input type="number" id='price' />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="discount">Discount *</label>
                    <input type="number" id='discount' />
                </div>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="desc">Description *</label>
                <textarea id="desc"></textarea>
            </div>
        </div>
    )
}