import CategoryDetails from './CategoryDetails/CategoryDetails';
import Colors from './Colors/Colors';
import Description from './Description/Description';
import Memory from './Memory/Memory';
import Price from './Price/Price';
// SCSS
import styles from './Details.module.scss';
import Buttons from './Buttons/Buttons';

type propTypes = {
    data: {
        name: string,
        discountPrice: number,
        price: number,
        desc: string,
        colors: [],
    }
}

export default function Details({ data }: propTypes) {
    return (
        <div className={styles.details}>
            <h1>{data.name}</h1>
            <Price price={data.price} discountPrice={data.discountPrice} />
            <Colors colors={data.colors} />
            <Memory />
            <CategoryDetails />
            <Description desc={data.desc} />
            <Buttons />
        </div>
    )
}