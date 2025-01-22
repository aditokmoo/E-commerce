import { useState } from 'react';
// SCSS
import styles from './Slider.module.scss';

interface propTypes {
    images: [string]
}

export default function Slider({ images }: propTypes) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className={styles.slider}>
            <div className={styles.sliderImages}>
                {images.map((image: string, index: number) => (
                    <img
                        src={`http://localhost:8000/${image}`}
                        className={activeImage === index ? `${styles.image} ${styles.active}` : styles.image}
                        alt=""
                        key={index}
                        onClick={() => setActiveImage(index)}
                    />
                ))}
            </div>
            <div className={styles.main}>
                <img src={`http://localhost:8000/${images[activeImage]}`} className={styles.mainImage} alt="" />
            </div>
        </div>
    )
}