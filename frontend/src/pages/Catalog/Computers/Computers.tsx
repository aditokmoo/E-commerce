import FilterNav from "../../../components/FilterNav/FilterNav";
import Products from "../../../components/Products/Products";
import Brand from "../../../components/ProductsSidebar/Filters/Brand/Brand";
import GraphicCards from "../../../components/ProductsSidebar/Filters/Graphics/GraphicCards";
import Memory from "../../../components/ProductsSidebar/Filters/Memory/Memory";
import Price from "../../../components/ProductsSidebar/Filters/Price/Price";
import Procesors from "../../../components/ProductsSidebar/Filters/Procesors/Procesors";
import SSDMemory from "../../../components/ProductsSidebar/Filters/SSDMemory/SSDMemory";
import Type from "../../../components/ProductsSidebar/Filters/Type/Type";
import ProductsSidebar from "../../../components/ProductsSidebar/ProductsSidebar";
// SCSS
import styles from './Computers.module.scss';

export default function Computers() {
    return (
        <div className="container">
            <FilterNav />
            <div className={styles.flexContainer}>
                <ProductsSidebar>
                    <Price />
                    <Type />
                    <Brand />
                    <Memory />
                    <SSDMemory />
                    <Procesors />
                    <GraphicCards />
                </ProductsSidebar>
                <Products products={[]} />
            </div>
        </div>
    )
}