// SCSS
import styles from './Colors.module.scss';

export default function Colors() {
    return (
        <div className={styles.colors}>
            Select color:
            <div className={`${styles.box} ${styles.black}`}></div>
            <div className={`${styles.box} ${styles.purple}`}></div>
            <div className={`${styles.box} ${styles.red}`}></div>
            <div className={`${styles.box} ${styles.yellow}`}></div>
            <div className={`${styles.box} ${styles.white}`}></div>
        </div>
    )
}