import { useProductFilterContext } from '../../../../../context/ProductFilterContext';
// React icons
import { GrFormSearch } from 'react-icons/gr';
// SCSS
import styles from './SearchInput.module.scss';

export default function SearchInput() {
    const { searchText, setSearchText } = useProductFilterContext();
    return (
        <form className={styles.navForm}>
            <GrFormSearch className={styles.navFormIcon} />
            <input type="text" placeholder='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)} id='searchInput' className={styles.searchInput} />
        </form>
    )
}