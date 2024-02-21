import { useProductFilterContext } from '../../../../../context/ProductFilterContext';
import { Link } from 'react-router-dom';
import { useGetSearchedProducts } from '../../../../../hooks/useProduct';
import ProductItem from '../../../../ProductItem/ProductItem';
// SCSS
import styles from './SearchResult.module.scss';
import { MoonLoader } from 'react-spinners';

export default function SearchResult() {
    const { data: products, isLoading } = useGetSearchedProducts();
    const { setSearchText } = useProductFilterContext();

    return (
        <div className={styles.searchResults}>
            {isLoading && <MoonLoader color="#171717" size={30} className={styles.loader} />}
            {products?.map((product: any, index: number) => {
                return (
                    <Link to={`/catalog/${product.category}/${product._id}`} onClick={() => setSearchText('')}>
                        <ProductItem key={index}>
                            <ProductItem.Image image={product.images[0]} />
                            <ProductItem.Name>{product.name}</ProductItem.Name>
                            <ProductItem.Price>{product.price}</ProductItem.Price>
                        </ProductItem>
                    </Link>
                )
            })}
        </div>
    )
}