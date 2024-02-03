// SCSS
import styles from './Memory.module.scss';

export default function Memory() {
    return (
        <div className={styles.memory}>
            <div className={styles.option}>128GB</div>
            <div className={styles.option}>256GB</div>
            <div className={styles.option}>512GB</div>
            <div className={styles.option}>1TB</div>
        </div>
    )
}