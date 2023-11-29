import { Link } from "react-router-dom";
// SCSS
import styles from './ShopNowButton.module.scss';

type ShopNowButtonType = {
    to: string,
    color: string,
    children: string,
}

export default function ShopNowButton({ to, color, children }: ShopNowButtonType) {
    const buttonStyle = {
        border: `1px solid ${color}`,
        color: color,
    }

    return <Link to={to} style={buttonStyle} className={styles.button}>{children}</Link>
}