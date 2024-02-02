// SCSS
import styles from './ImagesInfo.module.scss';

export default function ImagesInfo({ register }: any) {
    return (
        <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
                <label htmlFor="image">Product image</label>
                <input type="file" id='image' {...register('image')} />
            </div>
        </div>
    )
}