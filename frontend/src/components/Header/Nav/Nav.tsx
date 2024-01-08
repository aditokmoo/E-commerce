import { Link } from "react-router-dom";
// React icons
import { GrFormSearch } from "react-icons/gr";
import { RiHeartLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
// Images
import Logo from '../../../assets/logo.png';
// SCSS
import styles from './Nav.module.scss';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className="container">
                <div className={styles.navSection}>
                    <img src={Logo} alt="Logo" />
                    <form className={styles.navForm}>
                        <GrFormSearch className={styles.navFormIcon} />
                        <input type="text" placeholder='Search' id='searchInput' className={styles.searchInput} />
                    </form>
                    <ul className={styles.links}>
                        <li><Link to='/' className={styles.active}>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                    <div className={styles.options}>
                        <span className={styles.icon}><RiHeartLine /></span>
                        <span className={styles.icon}><BsCart2 /></span>
                        {true ? (
                            <Link to='/user/login' className={styles.loginBtn}>Login</Link>
                        ):(
                            <span className={styles.icon}><AiOutlineUser /></span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}