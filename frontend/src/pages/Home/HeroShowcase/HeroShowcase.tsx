// Components
import ShopNowButton from '../../../components/ShopNowButton/ShopNowButton';
// Images
import macbookImage from '../../../assets/showcase-macbook.png';
import headphoneImage from '../../../assets/headphone-image.png';
import vrImage from '../../../assets/vr-image.png';
import playstationImage from '../../../assets/playstation-image.png'
// SCSS
import styles from './HeroShowcase.module.scss'

export default function HeroShowcase() {
    return (
        <article className={styles.heroShowcase}>
            <div className={styles.gridContainer}>
                <div className={styles.fullWidth}>
                    <img src={playstationImage} alt="" className={styles.playStationImage}/>
                    <div className={styles.content}>
                        <h1>Playstation 5</h1>
                        <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.sideBySide}>
                        <img src={headphoneImage} alt="" />
                        <div className={styles.content}>
                            <h1><span>Apple AirPods</span> Max</h1>
                            <p>Computational audio. Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className={styles.sideBySide}>
                        <img src={vrImage} alt="" />
                        <div className={styles.content}>
                            <h1><span>Apple Vision</span> Pro</h1>
                            <p>An immersive way to experience entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gridFlexTwo}>
                <div className={styles.content}>
                    <h1><span>Macbook</span> Air</h1>
                    <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    <ShopNowButton to='/' color='black'>Shop Now</ShopNowButton>
                </div>
                <img src={macbookImage} className={styles.macbookImage} alt="" />
            </div>
        </article>
    )
}