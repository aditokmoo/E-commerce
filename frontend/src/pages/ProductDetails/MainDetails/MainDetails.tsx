import Slider from './Slider/Slider';
import Details from './Details/Details';
// SCSS
import styles from './MainDetails.module.scss';

type propTypes = {
    data: {
        image: string,
        name: string,
        discountPrice: number,
        price: number,
        desc: string
    }
}

export default function MainDetails({ data }: propTypes) {
    return (
        <div className={styles.mainDetails}>
            <Slider image={data?.image} />
            <Details />
        </div>
    )
}