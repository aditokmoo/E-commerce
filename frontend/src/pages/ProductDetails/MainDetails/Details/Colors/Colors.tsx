import { Link, useLocation, useParams } from 'react-router-dom';
// SCSS
import styles from './Colors.module.scss';

type propTypes = {
    products: [{
        color: string,
        id: string
    }]
}

export default function Colors({ products }: propTypes) {
    const location = useLocation();
    const { productId }: any = useParams();
    return (
        <div className={styles.colors}>
            Select color:
            {products.map(({color, id}, index: number) => (
                <Link to={`${location.pathname.replace(productId, id)}`} className={`${styles.box} ${styles[color]}`} key={index}></Link>
            ))}
        </div>
    )
}