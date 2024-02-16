import { useGetAllProducts } from '../../../hooks/useProduct';
import { useActiveCatalogFilterContext } from '../../../context/ActiveCatalogFilterContext';
import { MoonLoader } from 'react-spinners';
// Components
import ProductCard from '../../../components/ProductCard/ProductCard';
// SCSS
import styles from './Products.module.scss';

type dataTypes = {
    name: string,
    price: number,
    discountPrice: number,
    images: string,
    _id: string,
    category: string,
}

export default function Products() {
    const { data: products, isLoading } = useGetAllProducts();
    const { activeProduct, setActiveProduct } = useActiveCatalogFilterContext();
    
    if(isLoading) return <MoonLoader color="#171717" size={20} className={styles.loader} />

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
                    {products.filter(({ type }: string & object) => type === activeProduct).reverse().slice(0, 8).map((data: dataTypes, index: number) => (
                        <ProductCard key={index}>
                            <ProductCard.AddFavorites />
                            <div className={styles.body}>
                                <ProductCard.Image image={data?.images[0]} />
                                <ProductCard.Name>{data.name}</ProductCard.Name>
                                <ProductCard.DiscountPrice>{data?.discountPrice}</ProductCard.DiscountPrice>
                                <ProductCard.Price>{data?.price}</ProductCard.Price>
                            </div>
                            <ProductCard.Button productId={data._id} productCategory={data.category} children='Buy' />
                        </ProductCard>
                    ))}
                </div>
            </div>
        </section>
    )
}