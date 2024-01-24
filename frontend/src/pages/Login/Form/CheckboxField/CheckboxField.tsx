import { useEffect } from 'react';
// SCSS
import styles from './CheckboxField.module.scss';

export default function CheckboxField({ register, rememberMe }: any) {

    useEffect(() => {
        if (rememberMe !== undefined) {
            localStorage.setItem('persist', JSON.stringify(rememberMe));
        }
    }, [rememberMe])

    return (
        <div className={styles.checkboxContainer}>
            <input {...register('remember_me')} type="checkbox" id='remember_me' />
            <label htmlFor="remember_me">Remember me</label>
        </div>
    )
}