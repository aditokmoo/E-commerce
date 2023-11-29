import FilterNav from "../../../components/FilterNav/FilterNav";
import Products from "../../../components/Products/Products";
import Brand from "../../../components/ProductsSidebar/Filters/Brand/Brand";
import Memory from "../../../components/ProductsSidebar/Filters/Memory/Memory";
import Price from "../../../components/ProductsSidebar/Filters/Price/Price";
import ProductsSidebar from "../../../components/ProductsSidebar/ProductsSidebar";
import { products } from "../../../utils/data";
// SCSS
import styles from './Smartphones.module.scss';

export default function Smartphones() {
    return (
        <div className="container">
            <FilterNav />
            <div className={styles.flexContainer}>
                <ProductsSidebar>
                    <Price />
                    <Brand />
                    <Memory />
                </ProductsSidebar>
                <Products products={products} />
            </div>
        </div>
    )
}