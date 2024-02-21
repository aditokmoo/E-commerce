import { useGetSearchedProducts } from '../../../../../hooks/useProduct';
import ProductItem from '../../../../ProductItem/ProductItem';
// SCSS
import styles from './SearchResult.module.scss';

export default function SearchResult() {
    const { data: products, isLoading } = useGetSearchedProducts();

    if (isLoading) return <h2>Loading...</h2>

    return (
        <div className={styles.searchResults}>
            {products.map((product: any, index: number) => (
                <ProductItem key={index}>
                    <ProductItem.Image image={product.images[0]} />
                    <ProductItem.Name>{product.name}</ProductItem.Name>
                    <ProductItem.Price>{product.price}</ProductItem.Price>
                </ProductItem>
            ))}
        </div>
    )
}