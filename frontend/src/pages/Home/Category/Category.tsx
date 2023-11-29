// React icons
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { PiHeadphones } from "react-icons/pi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { LuGamepad } from "react-icons/lu";
// SCSS
import styles from './Category.module.scss';

export default function Category() {
    return (
        <section className={styles.categorySection}>
            <div className="container">
                <div className={styles.category}>
                    <div className={styles.head}>
                        <h3>Browse By Category</h3>
                        <div className={styles.sliderArrows}>
                            <span><FaChevronLeft /></span>
                            <span><FaChevronRight /></span>
                        </div>
                    </div>
                    <div className={styles.categories}>
                        <div className={styles.card}>
                            <IoIosPhonePortrait />
                            <span>Phones</span>
                        </div>
                        <div className={styles.card}>
                            <LuGamepad />
                            <span>Smart Watches</span>
                        </div>
                        <div className={styles.card}>
                            <MdOutlineCameraAlt />
                            <span>Cameras</span>
                        </div>
                        <div className={styles.card}>
                            <PiHeadphones />
                            <span>Headphones</span>
                        </div>
                        <div className={styles.card}>
                            <HiOutlineComputerDesktop />
                            <span>Computers</span>
                        </div>
                        <div className={styles.card}>
                            <LuGamepad />
                            <span>Gaming</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}