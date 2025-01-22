// React icons
import { FaChevronDown } from 'react-icons/fa';
// SCSS
import styles from './FilterName.module.scss';
import { useActiveCatalogFilterContext } from '../../../context/ActiveCatalogFilterContext';

interface filterNameType {
    filterName: string,
    filterKey: string,
}

export default function FilterName({ filterName, filterKey }: filterNameType) {
    const { setActiveFilter, activeFilter } = useActiveCatalogFilterContext();

    return (
        <div className={styles.filterName} onClick={() => setActiveFilter(prevState => {
            const newFilterValue = activeFilter[filterKey] === filterKey ? '' : filterKey;
            return { ...prevState, [filterKey]: newFilterValue }
        })}>
            <span>{filterName}</span>
            <FaChevronDown className={activeFilter[filterKey] ? styles.active : undefined} />
        </div>
    )
}