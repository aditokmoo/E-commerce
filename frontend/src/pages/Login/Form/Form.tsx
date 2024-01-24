import { Link } from 'react-router-dom';
// Custom hook
import { useLogin } from '../../../hooks/useAuth';
// Components
import InputField from './InputField/InputField';
import CheckboxField from './CheckboxField/CheckboxField';
// SCSS
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit, watch } = useForm();
    const { mutate} = useLogin();
    const rememberMe = watch('remember_me')

    return (
        <form onSubmit={handleSubmit((data: any) => mutate(data))}>
            <div className={styles.formContainer}>
                {/* Email Field */}
                <InputField register={register} value='Email' id='email' type='email' className='email' autoComplete='off' />
                {/* Password Field */}
                <InputField register={register} value='Password' id='password' type='password' className='password' autoComplete='off' />
                {/* Remember me Field */}
                <CheckboxField rememberMe={rememberMe} register={register} />
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