// SCSS
import styles from './Description.module.scss';

interface propTypes {
    desc: string
}

export default function Description({ desc }: propTypes) {
    return (
        <div className={styles.description}>
            <p>{desc}</p>
        </div>
    )
}