// Components
import { useActiveCatalogFilterContext } from '../../../../context/ActiveCatalogFilterContext';
import FilterName from '../../FilterName/FilterName';
// SCSS
import styles from './Price.module.scss';

export default function Price() {
    const { activeFilter } = useActiveCatalogFilterContext();

    return (
        <div className={styles.price}>
            <FilterName filterName='Price' filterKey='price' />
            {activeFilter.price && (
                <div className={styles.priceForm}>
                    <form>
                        <div className={styles.formContainer}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="from" className={styles.from}>From</label>
                                <input type="number" id='from' placeholder='0' />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="to" className={styles.to}>To</label>
                                <input type="number" id='to' placeholder='0' />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}