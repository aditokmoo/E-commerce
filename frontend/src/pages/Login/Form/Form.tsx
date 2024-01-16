import { Link } from 'react-router-dom';
// Custom hook
import { useLogin } from '../../../hooks/useAuth';
// Components
import InputField from './InputField/InputField';
import CheckboxField from './CheckboxField/CheckboxField';
// SCSS
import styles from './Form.module.scss';
import useHandleInputChange from './hooks/useHandleInputChange';

export default function Form() {
    const { mutate } = useLogin();
    const { email, password, handleInputChange } = useHandleInputChange();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            mutate({email, password})
        }}>
            <div className={styles.formContainer}>
                {/* Email Field */}
                <InputField value='Email' id='email' type='email' className='email' autoComplete='off' handleChange={handleInputChange} />
                {/* Password Field */}
                <InputField value='Password' id='password' type='password' className='password' autoComplete='off' handleChange={handleInputChange} />
                {/* Remember me Field */}
                <CheckboxField />
            </div>

            <div className={styles.formFooter}>
                <button>Sign In</button>
                <p>
                    You already have account? <Link to="/user/register">Create account</Link>
                </p>
            </div>
        </form>
    )
}