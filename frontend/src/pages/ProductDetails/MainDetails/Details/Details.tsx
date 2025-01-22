import CategoryDetails from './CategoryDetails/CategoryDetails';
import Colors from './Colors/Colors';
import Description from './Description/Description';
import Memory from './Memory/Memory';
import Price from './Price/Price';
// SCSS
import styles from './Details.module.scss';
import Buttons from './Buttons/Buttons';

interface propTypes {
    data: {
        name: string,
        discountPrice: number,
        price: number,
        desc: string,
        _id: string
    },
    products: [{
        color: string,
        id: string
    }]
}

export default function Details({ data, products }: propTypes) {
    return (
        <div className={styles.details}>
            <h1>{data.name}</h1>
            <Price price={data.price} discountPrice={data.discountPrice} />
            <Colors products={products} />
            <Memory />
            <CategoryDetails />
            <Description desc={data.desc} />
            <Buttons data={data} />
        </div>
    )
}