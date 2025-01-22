// SCSS
import ShopNowButton from '../../../../components/ShopNowButton/ShopNowButton';
import styles from './SpecialProduct.module.scss';

interface specialProductType {
    image: string,
    title: string,
    text: string
}

export default function SpecialProduct({ image, title, text }: specialProductType) {
    return (
        <div className={styles.specialProduct}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.body}>
                <h2>{title}</h2>
                <p>{text}</p>
                <ShopNowButton to={'/'} color='grey' children='Shop Now' />
            </div>
        </div>
    )
}