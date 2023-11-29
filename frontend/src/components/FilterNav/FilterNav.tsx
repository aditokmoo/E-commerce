import { useLocation } from 'react-router-dom'; 
// SCSS
import styles from './FilterNav.module.scss';

export default function FilterNav() {
    const location = useLocation();
    const params = location.pathname.replace(/\//g, ' > ')

    return (
        <section className={styles.filterNav}>
            <div className={styles.filterNavWrapper}>
                <span>{`Home ${params}`}</span>
            </div>
        </section>
    )
}