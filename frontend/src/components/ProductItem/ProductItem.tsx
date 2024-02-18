// Components
import ProductItemImage from './components/ProductItemImage';
import ProductItemName from './components/ProductItemName';
import ProductItemRemoveQuantity from './components/ProductItemRemoveQuantity';
import ProductItemQuantityInput from './components/ProductItemQuantityInput';
import ProductItemAddQuantity from './components/ProductItemAddQuantity';
import ProductItemPrice from './components/ProductItemPrice';
import ProductItemRemove from './components/ProductItemRemove';
// SCSS
import styles from './ProductItem.module.scss';

export default function ProductItem({ children }: any) {

    return (
        <div className={styles.productItem}>
            {children}
        </div>
    )
}

ProductItem.Image = ProductItemImage;
ProductItem.Name = ProductItemName;
ProductItem.RemoveQunatity = ProductItemRemoveQuantity;
ProductItem.QunatityInput = ProductItemQuantityInput;
ProductItem.AddQuantity = ProductItemAddQuantity;
ProductItem.Price = ProductItemPrice;
ProductItem.Remove = ProductItemRemove;