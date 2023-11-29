// Images
import iphoneImage from '../../../assets/hero-iphone-image.png'
import ShopNowButton from '../../../components/ShopNowButton/ShopNowButton';
// SCSS
import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.heroSection}>
                    <div className={styles.textContent}>
                        <h4>Pro.Beyond</h4>
                        <h1><span>IPhone 14</span> Pro</h1>
                        <p>Created to change everything for the better. For everyone</p>
                        <ShopNowButton to='/' color='#ddd'>Shop Now</ShopNowButton>
                    </div>
                    <div className={styles.imageContent}>
                        <img src={iphoneImage} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}