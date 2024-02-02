// SCSS
import { Link, useLocation } from 'react-router-dom';
import styles from './DarkButton.module.scss';

type DarkButtonType = {
    children: string,
    productId: string,
    productCategory: string
}

export default function DarkButton({ children, productId, productCategory } : DarkButtonType) {
    const location = useLocation();
    const pathname = location.pathname === '/' ? `/catalog/${productCategory}/${productId}` : `${location.pathname}/${productId}`
    console.log(pathname)
    return <Link to={pathname} className={styles.button}>{children}</Link>
}