// SCSS
import styles from './Slider.module.scss';

type propTypes = {
    images: string
}

export default function Slider({ images } : propTypes) {
    return (
        <div className={styles.slider}>
            <img src={`http://localhost:8000/${images[0]}`} className={styles.image} alt="" />
        </div>
    )
}