// SCSS
import styles from './BasicInfoForm.module.scss';

export default function BasicInfoForm() {
    return (
        <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
                <label htmlFor="name">Product name *</label>
                <input type="text" id='name' />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="category">Product category *</label>
                <select id="category">
                    <option value="smartphone">Smartphone</option>
                    <option value="computer">Computer</option>
                </select>
            </div>
            <div className={styles.inputGridContainer}>
                <div className={styles.inputContainer}>
                    <label htmlFor="type">Type</label>
                    <select id="type">
                        <option value="new">New</option>
                        <option value="bestseller">Best seller</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="colors">Colors</label>
                    <select id="colors">
                        <option value="new">New</option>
                        <option value="bestseller">Best seller</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="price">Price</label>
                    <input type="number" id='price' />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="discount">Discount</label>
                    <input type="number" id='discount' />
                </div>
            </div>
            <div className={styles.textContainer}>
                <label htmlFor="desc">Description *</label>
                <textarea id="desc"></textarea>
            </div>
        </div>
    )
}