import SearchInput from './SearchInput/SearchInput';
// SCSS
import styles from './Search.module.scss';
import SearchResult from './SearchResult/SearchResult';
import { useProductFilterContext } from '../../../../context/ProductFilterContext';

export default function Search() {
    const { searchText } = useProductFilterContext();

    return (
        <div className={styles.search}>
            <SearchInput />
            {searchText !== '' && <SearchResult />}
        </div>
    )
}