// SCSS
import styles from './Slider.module.scss';

type propTypes = {
    images: [string]
}

export default function Slider({ images } : propTypes) {
    return (
        <div className={styles.slider}>
            <div className={styles.sliderImages}>
                {images.map((image: string, index: number) => (
                    <img src={`http://localhost:8000/${image}`} className={styles.image} alt="" key={index} />
                ))}
            </div>
            <div className={styles.main}>
                <img src={`http://localhost:8000/${images[0]}`} className={styles.mainImage} alt="" />
            </div>
        </div>
    )
}