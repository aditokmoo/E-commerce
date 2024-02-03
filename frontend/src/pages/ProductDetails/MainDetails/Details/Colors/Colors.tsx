// SCSS
import styles from './Colors.module.scss';

type propTypes = {
    colors: []
}

export default function Colors({ colors }: propTypes) {
    return (
        <div className={styles.colors}>
            Select color:
            {colors.map(color => (
                <div className={`${styles.box} ${styles[color]}`}></div>
            ))}
        </div>
    )
}