import Slider from './Slider/Slider';
import Details from './Details/Details';
// SCSS
import styles from './MainDetails.module.scss';

type propTypes = {
    data: {
        images: [string],
        name: string,
        discountPrice: number,
        price: number,
        desc: string,
    },
    products: [{
        color: string,
        id: string
    }]
}

export default function MainDetails({ data, products }: propTypes) {
    return (
        <div className={styles.mainDetails}>
            <Slider images={data?.images} />
            <Details data={data} products={products} />
        </div>
    )
}