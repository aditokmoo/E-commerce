import { useLocation, useNavigate } from 'react-router';
import { useProductFilterContext } from '../../../context/ProductFilterContext';
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
    const { setSortBy } = useProductFilterContext();
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sortValue = e.target.value;
        setSortBy(sortValue);

        const searchParams = new URLSearchParams(location.search);
        searchParams.set('sortBy', sortValue);
        const newUrl = sortValue === '' ? currentPath : `${currentPath}?${searchParams.toString()}`;

        navigate(newUrl)
    }

    return (
        <div className={styles.mainFilter}>
            <p>Products: <span>{products ? products.length : 0}</span></p>
            <select onChange={(e) => handleChange(e)}>
                <option value="">Filter</option>
                <option value="lowest">Lowest price</option>
                <option value="highest">Highest price</option>
                <option value="bestrated">Best rating</option>
            </select>
        </div>
    )
}