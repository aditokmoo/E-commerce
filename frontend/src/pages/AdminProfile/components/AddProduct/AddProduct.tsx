import Header from '../../../../components/Header/Header';
import BasicInfoForm from './BasicInfoForm/BasicInfoForm';
// SCSS
import styles from './AddProduct.module.scss';

export default function AddProduct() {
    return (
        <section className={styles.addProduct}>
            <Header />
            <div className={styles.container}>
                <div className={styles.main}>
                    <h2>Add Product</h2>
                    <form>
                        <div className={styles.section}>
                            <div className={styles.basicInfo}>
                                <h3>Basic information</h3>
                                <BasicInfoForm />
                            </div>
                            <div className={styles.addImage}>
                                <h3>Product image</h3>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}