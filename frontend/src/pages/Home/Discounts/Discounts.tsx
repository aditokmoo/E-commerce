import { useGetAllProducts } from '../../../hooks/useProduct';
// Components
import ProductCard from '../../../components/ProductCard/ProductCard';
// SCSS
import styles from './Discounts.module.scss';
import { MoonLoader } from 'react-spinners';

interface dataTypes {
    name: string,
    price: number,
    discountPrice: number,
    images: string
    _id: string,
    category: string,
}

export default function Discounts() {
    const { data: products, isLoading } = useGetAllProducts();

    if (isLoading) return <MoonLoader color="#171717" className="loader" />

    return (
        <section className={styles.discountSection}>
            <div className="container">
                <div className={styles.discountWrapper}>
                    <h2>Discount up to -50%</h2>
                    <div className={styles.discounts}>
                        {products.filter(({ discount }: number & object) => discount >= 50).reverse().slice(0, 4).map((data: dataTypes, index: number) => (
                            <ProductCard key={index}>
                                <ProductCard.AddFavorites />
                                <div className={styles.body}>
                                    <ProductCard.Image image={data?.images[0]} />
                                    <ProductCard.Name>{data.name}</ProductCard.Name>
                                    <ProductCard.DiscountPrice>{data?.discountPrice}</ProductCard.DiscountPrice>
                                    <ProductCard.Price>{data?.price}</ProductCard.Price>
                                </div>
                                <ProductCard.Button productId={data._id} productCategory={data.category} children='Buy' />
                            </ProductCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}