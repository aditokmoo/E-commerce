import { useAuthContext } from "../../../context/authContext";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
// React icons
import { RiHeartLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
// Images
import Logo from '../../../assets/logo.png';
// SCSS
import styles from './Nav.module.scss';

export default function Nav() {
    const { state } = useAuthContext();

    return (
        <div className={styles.nav}>
            <div className="container">
                <div className={styles.navSection}>
                    <img src={Logo} alt="Logo" />
                    <Search />
                    <ul className={styles.links}>
                        <li><Link to='/' className={styles.active}>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                    <div className={styles.options}>
                        <span className={styles.icon}><RiHeartLine /></span>
                        <Link to='/user/cart' className={styles.icon}><BsCart2 /></Link>
                        {!state.currentUser ? (
                            <Link to='/user/login' className={styles.icon}><AiOutlineUser /></Link>
                        ): state.userRole === 'user' ? (
                            <Link to='/user/profile/dashboard' className={styles.icon}><AiOutlineUser /></Link>
                        ) : (
                            <Link to='/admin/dashboard' className={styles.icon}><AiOutlineUser /></Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}