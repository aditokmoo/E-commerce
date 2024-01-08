// Images
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import verifyBadgeIcon from '../../assets/verifyBadgeIcon.png'
// SCSS
import styles from './VerifyPage.module.scss';

export default function VerifyPage() {
    return (
        <section className={styles.verifyPage}>
            <img src={logo} alt=""  className={styles.logo}/>
            <div className={styles.container}>
                <div className={styles.section}>
                    <img src={verifyBadgeIcon} alt="" className={styles.verifyBadgeIcon} />
                    <p>Verification link has been sent to email. Please verify</p>
                    <Link to='/user/login'>Continue</Link>
                </div>
            </div>
        </section>
    )
}