import { Link } from "react-router-dom";
// React icons
import { PiHeadphones } from "react-icons/pi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { LuGamepad } from "react-icons/lu";
// SCSS
import styles from './SubNav.module.scss';

export default function SubNav() {
    return (
        <div className={styles.subNav}>
            <div className="container">
                <div className={styles.subNavSection}>
                    <ul className={styles.subNavLinks}>
                        <li>
                            <IoIosPhonePortrait />
                            <Link to='/catalog/smartphones'>Phones</Link>
                        </li>
                        <li>
                            <HiOutlineComputerDesktop />
                            <Link to='/catalog/computers'>Computers</Link>
                        </li>
                        <li>
                            <LuGamepad />
                            <Link to='/'>Smart Watches</Link>
                        </li>
                        <li>
                            <MdOutlineCameraAlt />
                            <Link to='/'>Cameras</Link>
                        </li>
                        <li>
                            <PiHeadphones />
                            <Link to='/'>Headphones</Link>
                        </li>
                        <li>
                            <LuGamepad />
                            <Link to='/'>Gaming</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}