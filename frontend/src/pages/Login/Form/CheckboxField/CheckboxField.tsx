import { useEffect } from 'react';
import { useAuthContext } from '../../../../context/authContext';
// SCSS
import styles from './CheckboxField.module.scss';

export default function CheckboxField() {
    const { persist, setPersist } = useAuthContext();

    useEffect(() => {
        localStorage.setItem('persist', JSON.stringify(persist));
    }, [persist])

    return (
        <div className={styles.checkboxContainer}>
            <input type="checkbox" id='remember_me' checked={persist} onChange={() => setPersist(prevState => !prevState)} />
            <label htmlFor="remember_me">Remember me</label>
        </div>
    )
}