// Images
import logoImage from '../../assets/footer-logo.png';
// SCSS
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerSection}>
                    <div className={styles.column}>
                        <img src={logoImage} alt="Logo" />
                        <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    </div>
                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li>Bonus program</li>
                            <li>Gift cards</li>
                            <li>Credit and payment</li>
                            <li>Service contracts</li>
                            <li>Non-cash account</li>
                            <li>Payment</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Assistence to the buyer</h4>
                        <ul>
                            <li>Find an order</li>
                            <li>Terms of delivery</li>
                            <li>Exchange and return of goods</li>
                            <li>Guarantee</li>
                            <li>Frequently asked question</li>
                            <li>Terms of use of the site</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}