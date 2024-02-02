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
import { useGetAllProducts } from "../../../hooks/useProduct";
// SCSS
import styles from './Computers.module.scss';

export default function Computers() {
    const { data: products, isLoading } = useGetAllProducts();

    if(isLoading) return <h2>Loading...</h2>

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
                <Products products={products} />
            </div>
        </div>
    )
}