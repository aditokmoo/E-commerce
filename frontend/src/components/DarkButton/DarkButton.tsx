import { Link, useLocation } from 'react-router-dom';
// SCSS
import styles from './DarkButton.module.scss';

interface DarkButtonType {
    children: string,
    productId: string,
    productCategory: string
}

export default function DarkButton({ children, productId, productCategory }: DarkButtonType) {
    const location = useLocation();
    const pathname = location.pathname === '/' ? `/catalog/${productCategory}/${productId}` : `${location.pathname}/${productId}`
    return <Link to={pathname} className={styles.button}>{children}</Link>
}