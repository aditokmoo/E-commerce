import { useActiveCatalogFilterContext } from '../../../context/ActiveCatalogFilterContext';
// SCSS
import styles from './Form.module.scss';

type FormType = {
    data: {
        name: string,
        value: string,
        type: string
    }[] | null,
}

export default function Form({ data } : FormType) {
    const { activeFilter } = useActiveCatalogFilterContext();

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.formContainer}>
                    {data?.filter(({type}) => activeFilter[type]).map(({ name, value }, index) => (
                        <div className={styles.inputContainer} key={index}>
                            <input type="checkbox" id={value} />
                            <label htmlFor={value}>{name}</label>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}