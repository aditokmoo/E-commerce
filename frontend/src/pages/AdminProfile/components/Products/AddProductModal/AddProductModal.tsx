import { useForm } from "react-hook-form";
import { useCreateProduct } from "../../../../../hooks/useProduct";
import CategoryInfo from "./CategoryInfo/CategoryInfo";
import ImagesInfo from "./ImagesInfo/ImagesInfo";
import { useAddProductContext } from "../../../../../context/AddProductModalContext";
import BasicInfo from "./BasicInfo/BasicInfo";
import { motion } from "framer-motion"
// React icons
import { MdBookmarkAdd } from "react-icons/md";
// SCSS
import styles from './AddProductModal.module.scss';

export default function AddProductModal({ setShowModal }: any) {
    const { state, dispatch } = useAddProductContext();
    const { register, handleSubmit } = useForm();
    const { mutate, isPending } = useCreateProduct();

    if(isPending) return <h2>Loading...</h2>

    function onSubmit(data: any) {
        const formData = new FormData();
        const fieldNames = ['name', 'category', 'type', 'colors', 'price', 'discount', 'desc']
        formData.append('image', data.image[0])
        fieldNames.forEach(name => {
            formData.append(name, data[name]);
        });
        
        mutate(formData);
        setShowModal(false)
        dispatch({ type: 'default' })
    }

    return (
            <>
                <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 0 }} transition={{ delay: 0.1 }} exit={{ opacity: 0, y: 0}} className={styles.overlay}></motion.div>
                <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 200 }} transition={{ delay: 0.3 }} exit={{ opacity: 0, y: 0}} className={styles.modal}>
                    <h2><MdBookmarkAdd /> Add Product</h2>
                    {/* PROGRESS BAR */}
                    <div className={styles.progress}>
                        <div className={styles.level}>
                            <div className={state.pageName === 'basic' ? `${styles.line} ${styles.active}` : styles.line}></div>
                            <span>Basic information</span>
                        </div>
                        <div className={styles.level}>
                            <div className={state.pageName === 'category' ? `${styles.line} ${styles.active}` : styles.line}></div>
                            <span>Category information</span>
                        </div>
                        <div className={styles.level}>
                            <div className={state.pageName === 'images' ? `${styles.line} ${styles.active}` : styles.line}></div>
                            <span>Images</span>
                        </div>
                    </div>
                    {/* BASIC INFO */}
                    {state.pageName === 'basic' && <BasicInfo register={register} />}
                    {/* CATEGORY INFO */}
                    {state.pageName === 'category' && <CategoryInfo />}

                    {/* IMAGES */}
                    {state.pageName === 'images' && <ImagesInfo register={register} />}

                    {/* BUTTONS */}
                    <div className={styles.btns}>
                        <div className={styles.col}>
                            {state.pageName !== 'basic' && (
                                <button className={styles.backBtn} onClick={() => dispatch({ type: 'prev' })}>Back</button>
                            )}
                        </div>
                        <div className={styles.col}>
                            <button className={styles.cancelBtn} onClick={() => setShowModal(false)}>Cancel</button>
                            {state.pageName === 'images' ? (
                                <button className={styles.nextBtn} onClick={handleSubmit(onSubmit)}>Save</button>
                            ) : (
                                <button className={styles.nextBtn} onClick={() => dispatch({ type: 'next' })}>Next</button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </>
    )
}
