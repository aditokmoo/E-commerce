// React icons
import { MdBookmarkAdd } from "react-icons/md";
// SCSS
import styles from './AddProductModal.module.scss';
import BasicInfo from "./BasicInfo/BasicInfo";

export default function AddProductModal({ setShowModal }: any) {
    return (
            <>
                <div className={styles.overlay}></div>
                <div className={styles.modal}>
                    <h2><MdBookmarkAdd /> Add Product</h2>
                    {/* PROGRESS BAR */}
                    <div className={styles.progress}>
                        <div className={styles.level}>
                            <div className={`${styles.line} ${styles.active}`}></div>
                            <span>Basic information</span>
                        </div>
                        <div className={styles.level}>
                            <div className={styles.line}></div>
                            <span>Category information</span>
                        </div>
                        <div className={styles.level}>
                            <div className={styles.line}></div>
                            <span>Images</span>
                        </div>
                    </div>
                    {/* BASIC INFO */}
                    <BasicInfo />
                    {/* CATEGORY INFO */}

                    {/* IMAGES */}

                    {/* BUTTONS */}
                    <div className={styles.btns}>
                        <div className={styles.col}>
                            <button className={styles.backBtn}>Back</button>
                        </div>
                        <div className={styles.col}>
                            <button className={styles.cancelBtn} onClick={() => setShowModal(false)}>Cancel</button>
                            <button className={styles.nextBtn}>Next</button>
                        </div>
                    </div>
                </div>
            </>
    )
}
