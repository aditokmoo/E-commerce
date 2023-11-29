// SCSS
import styles from './MainFilter.module.scss';

type MainFilterType = {
    products: {
        productImage: string,
        productName: string,
        price: string
    }[]
}

export default function MainFilter({ products }: MainFilterType) {
    return (
        <div className={styles.mainFilter}>
            <p>Products: <span>{products ? products.length : 0}</span></p>
            <select>
                <option value="lowest">Lowest price</option>
                <option value="hightes">Highest price</option>
            </select>
        </div>
    )
}