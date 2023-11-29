// SCSS
import styles from './DarkButton.module.scss';

type DarkButtonType = {
    children: string
}

export default function DarkButton({ children } : DarkButtonType) {
    return <button className={styles.button}>{children}</button>
}