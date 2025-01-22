// Components
import ProductCardImage from './components/ProductCardImage';
import ProductCardAddFavorites from './components/ProductCardAddFavorites';
import ProductCardName from './components/ProductCardName';
import ProductCardDiscountPrice from './components/ProductCardDiscountPrice';
import ProductCardPrice from './components/ProductCardPrice';
import DarkButton from '../DarkButton/DarkButton';
// SCSS
import styles from './ProductCard.module.scss';

interface propTypes {
    children: React.ReactNode
}

export default function ProductCard({ children }: propTypes) {
    return (
        <div className={styles.productCard}>
            {children}
        </div>
    )
}

ProductCard.AddFavorites = ProductCardAddFavorites;
ProductCard.Image = ProductCardImage;
ProductCard.Name = ProductCardName;
ProductCard.DiscountPrice = ProductCardDiscountPrice;
ProductCard.Price = ProductCardPrice;
ProductCard.Button = DarkButton;