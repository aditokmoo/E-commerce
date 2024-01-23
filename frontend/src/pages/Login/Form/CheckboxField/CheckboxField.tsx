import { useEffect } from 'react';
import { useAuthContext } from '../../../../context/authContext';
// SCSS
import styles from './CheckboxField.module.scss';

export default function CheckboxField({ register }: any) {

    useEffect(() => {
        localStorage.setItem('persist', JSON.stringify(persist));
    }, [persist])

    return (
        <div className={styles.checkboxContainer}>
            <input {...register('remember_me')} type="checkbox" id='remember_me' checked={persist} />
            <label htmlFor="remember_me">Remember me</label>
        </div>
    )
}