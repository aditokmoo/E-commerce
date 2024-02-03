import Slider from './Slider/Slider';
import Details from './Details/Details';
// SCSS
import styles from './MainDetails.module.scss';

type propTypes = {
    data: {
        images: string,
        name: string,
        discountPrice: number,
        price: number,
        desc: string,
        colors: []
    }
}

export default function MainDetails({ data }: propTypes) {
    return (
        <div className={styles.mainDetails}>
            <Slider images={data?.images} />
            <Details data={data} />
        </div>
    )
}