// SCSS
import styles from './Slider.module.scss';

type propTypes = {
    image: string
}

export default function Slider({ image } : propTypes) {
    return (
        <div className={styles.slider}>
            <img src={`http://localhost:8000/${image}`} className={styles.image} alt="" />
        </div>
    )
}