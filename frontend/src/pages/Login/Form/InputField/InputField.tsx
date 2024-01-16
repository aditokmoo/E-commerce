// SCSS
import styles from './InputField.module.scss';

type InputFieldType = {
    value: string,
    type: string,
    id: string,
    className: string,
    autoComplete: string,
    handleChange: (value: string, id: string) => void
}

export default function InputField({ value, type, id, className, autoComplete, handleChange } : InputFieldType) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{value} *</label>
            <input type={type} id={id} className={className} autoComplete={autoComplete} onChange={(e) => handleChange(e.target.value, e.target.id)} required />
        </div>
    )
}