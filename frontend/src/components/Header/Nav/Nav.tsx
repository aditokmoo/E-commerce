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
import { useAuthContext } from "../../../context/authContext";

export default function Nav() {
    const { currentUser, userRole } = useAuthContext();

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
                        {!currentUser ? (
                            <Link to='/user/login' className={styles.icon}><AiOutlineUser /></Link>
                        ): userRole === 'user' ? (
                            <Link to='/user/profile/dashboard' className={styles.icon}><AiOutlineUser /></Link>
                        ) : (
                            <Link to='/admin' className={styles.icon}><AiOutlineUser /></Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}