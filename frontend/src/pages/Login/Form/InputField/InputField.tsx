// SCSS
import styles from './InputField.module.scss';

export default function InputField({ value, type, id, className, autoComplete, handleChange }: any) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{value} *</label>
            <input type={type} id={id} className={className} autoComplete={autoComplete} onChange={(e) => handleChange(e.target.value, e.target.id)} required />
        </div>
    )
}