import { useEffect } from 'react';
// SCSS
import styles from './CheckboxField.module.scss';

type propTypes = { 
    register: Function, 
    rememberMe: boolean | undefined 
}

export default function CheckboxField({ register, rememberMe }: propTypes) {
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