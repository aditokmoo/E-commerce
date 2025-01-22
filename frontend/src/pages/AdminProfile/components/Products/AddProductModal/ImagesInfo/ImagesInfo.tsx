import { UseFormRegister } from 'react-hook-form';
// SCSS
import styles from './ImagesInfo.module.scss';

interface propTypes {
    register: UseFormRegister<Record<string, number>>
}

export default function ImagesInfo({ register }: propTypes) {
    return (
        <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
                <label htmlFor="images">Product image</label>
                <input type="file" id='images' {...register('images')} multiple />
            </div>
        </div>
    )
}