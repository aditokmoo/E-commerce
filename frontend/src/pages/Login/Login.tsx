import { Link } from 'react-router-dom';
// Images
import loginImage from '../../assets/auth-image.png';
// SCSS
import styles from './Login.module.scss';

export default function Login() {
    return (
        <div className={styles.login}>          
            <div className={styles.leftSection}>
                <h2>Sign In</h2>
                <p>Welcome to the best web shop</p>  
                <div className={styles.imageContainer}>
                    <label htmlFor="image">
                        <div className={styles.overlay}>
                            <span>Change Image</span>
                        </div>
                    </label>
                    <input type="file" id='image' className='image' />
                </div>
                <form>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="username">Username *</label>
                            <input type="text" id='username' className='username' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="firstName">First Name *</label>
                            <input type="text" id='firstName' className='firstName' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="lastName">Last Name *</label>
                            <input type="text" id='lastName' className='lastName' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email *</label>
                            <input type="email" id='email' className='email' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Password *</label>
                            <input type="password" id='password' className='password' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="confirmPassword">Confirm password *</label>
                            <input type="password" id='confirmPassword' className='confirmPassword' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phoneNumber">Phone Number *</label>
                            <input type="text" id='phoneNumber' className='phoneNumber' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="country">Country *</label>
                            <input type="text" id='country' className='country' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="city">City *</label>
                            <input type="text" id='city' className='city' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="postalCode">Postal Code *</label>
                            <input type="text" id='postalCode' className='postalCode' />
                        </div>
                    </div>

                    <div className={styles.formFooter}>
                        <button>Sign In</button>
                        <p>You already have account? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>

            <div className={styles.rightSection}>
                <img src={loginImage} alt="" />
            </div>
        </div>
    )
}