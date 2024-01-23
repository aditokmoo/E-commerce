// SCSS
import styles from './InputField.module.scss';

type InputFieldType = {
    value: string,
    type: string,
    id: string,
    className: string,
    autoComplete: string,
    register: any
}

export default function InputField({ value, type, id, className, autoComplete, register } : InputFieldType) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{value} *</label>
            <input {...register(id)} type={type} id={id} className={className} autoComplete={autoComplete} required />
        </div>
    )
}