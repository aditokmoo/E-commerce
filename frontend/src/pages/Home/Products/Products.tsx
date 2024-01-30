import { useGetAllProducts } from '../../../hooks/useProduct';
import { useActiveCatalogFilterContext } from '../../../context/ActiveCatalogFilterContext';
// Components
import ProductCard from '../../../components/ProductCard/ProductCard';
// SCSS
import styles from './Products.module.scss';

export default function Products() {
    const { data: products, isLoading } = useGetAllProducts();
    const { activeProduct, setActiveProduct } = useActiveCatalogFilterContext();
    
    if(isLoading) return <h2>Loading...</h2>
    
    return (
        <section className={styles.productsSection}>
            <div className="container">
                <ul className={styles.filters}>
                    <li className={activeProduct === 'new' ? styles.active : ''} onClick={() => {
                        setActiveProduct('new')
                    }}>New Arrival</li>
                    <li className={activeProduct === 'bestseller' ? styles.active : ''} onClick={() => {
                        setActiveProduct('bestseller')
                    }}>Best seller</li>
                </ul>
                <div className={styles.products}>
                    {products.filter(({ type }: any) => type === activeProduct).map((data: any, index: number) => (
                        <ProductCard productData={data} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}