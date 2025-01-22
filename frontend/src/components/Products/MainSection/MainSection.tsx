
import ProductCard from '../../ProductCard/ProductCard';
// SCSS
import styles from './MainSection.module.scss';

interface MainSectionType {
    products: {
        productImage: string,
        productName: string,
        price: string,
    }[]
}


export default function MainSection({ products }: MainSectionType) {
    return (
        <div className={styles.mainSection}>
            <div className={styles.products}>
                {products?.map((product: any, index: number) => (
                    <ProductCard key={index}>
                        <ProductCard.AddFavorites data={product} />
                        <div className={styles.body}>
                            <ProductCard.Image image={product?.images[0]} />
                            <ProductCard.Name>{product.name}</ProductCard.Name>
                            <ProductCard.DiscountPrice>{product.discountPrice}</ProductCard.DiscountPrice>
                            <ProductCard.Price>{product?.price}</ProductCard.Price>
                        </div>
                        <ProductCard.Button productId={product._id} productCategory={product.category} children='Buy' />
                    </ProductCard>
                ))}
            </div>
        </div>
    )
}