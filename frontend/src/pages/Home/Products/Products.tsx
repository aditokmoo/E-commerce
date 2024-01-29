// Components
import ProductCard from '../../../components/ProductCard/ProductCard';
// SCSS
import styles from './Products.module.scss';
import { useGetAllProducts } from '../../../hooks/useProduct';
import { useActiveCatalogFilterContext } from '../../../context/ActiveCatalogFilterContext';

export default function Products() {
    const { data: products, isLoading, refetch } = useGetAllProducts();
    const { activeProduct, setActiveProduct } = useActiveCatalogFilterContext();
    
    if(isLoading) return <h2>Loading...</h2>
    
    return (
        <section className={styles.productsSection}>
            <div className="container">
                <ul className={styles.filters}>
                    <li className={activeProduct === 'new' ? styles.active : ''} onClick={() => {
                        setActiveProduct('new')
                        refetch();
                    }}>New Arrival</li>
                    <li className={activeProduct === 'bestseller' ? styles.active : ''} onClick={() => {
                        setActiveProduct('bestseller')
                        refetch();
                    }}>Best seller</li>
                </ul>
                <div className={styles.products}>
                    {products.map((data: any, index: number) => (
                        <ProductCard productData={data} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}