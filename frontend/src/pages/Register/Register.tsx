import { useState } from 'react';
import { Link } from 'react-router-dom';
// Custom hooks
import { useSignup } from '../../hooks/useAuth';
// React icons
import { MdOutlineArrowBack } from "react-icons/md";
// SCSS
import styles from './Register.module.scss';

export default function Register() {
    const { mutate, isPending } = useSignup();
    const [ authData, setAuthData ] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        country: '',
        city: '',
        postalCode: ''
    })
    // Destructure authData state
    const { username, firstName, lastName, email, password, confirmPassword, phoneNumber, country, city, postalCode } = authData;

    if(isPending) return <h2>Loading...</h2>

    return (
        <div className={styles.register}>      
            <Link to='/' className={styles.backBtn}><MdOutlineArrowBack /></Link>
            <div className={styles.leftSection}>
                <h2>Create account</h2>
                <p>Welcome to the best web shop</p>  
                <div className={styles.imageContainer}>
                    <label htmlFor="image">
                        <div className={styles.overlay}>
                            <span>Change Image</span>
                        </div>
                    </label>
                    <input type="file" id='image' className='image' />
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    mutate(authData)
                }}>
                    <div className ={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="username">Username *</label>
                            <input type="text" id='username' value={username} onChange={(e) => setAuthData(prevState => ({...prevState, username: e.target.value}))} className='username' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="firstName">First Name *</label>
                            <input type="text" id='firstName' value={firstName} onChange={(e) => setAuthData(prevState => ({...prevState, firstName: e.target.value}))} className='firstName' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="lastName">Last Name *</label>
                            <input type="text" id='lastName' value={lastName} onChange={(e) => setAuthData(prevState => ({...prevState, lastName: e.target.value}))} className='lastName' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email *</label>
                            <input type="email" id='email' value={email} onChange={(e) => setAuthData(prevState => ({...prevState, email: e.target.value}))} className='email' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Password *</label>
                            <input type="password" id='password' value={password} onChange={(e) => setAuthData(prevState => ({...prevState, password: e.target.value}))} className='password' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="confirmPassword">Confirm password *</label>
                            <input type="password" id='confirmPassword' value={confirmPassword} onChange={(e) => setAuthData(prevState => ({...prevState, confirmPassword: e.target.value}))} className='confirmPassword' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phoneNumber">Phone Number *</label>
                            <input type="text" id='phoneNumber' value={phoneNumber} onChange={(e) => setAuthData(prevState => ({...prevState, phoneNumber: e.target.value}))} className='phoneNumber' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="country">Country *</label>
                            <input type="text" id='country' value={country} onChange={(e) => setAuthData(prevState => ({...prevState, country: e.target.value}))} className='country' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="city">City *</label>
                            <input type="text" id='city' value={city} onChange={(e) => setAuthData(prevState => ({...prevState, city: e.target.value}))} className='city' />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="postalCode">Postal Code *</label>
                            <input type="text" id='postalCode' value={postalCode} onChange={(e) => setAuthData(prevState => ({...prevState, postalCode: e.target.value}))} className='postalCode' />
                        </div>
                    </div>

                    <div className={styles.formFooter}>
                        <button>Create account</button>
                        <p>You already have account? <Link to='/user/login'>Login</Link></p>
                    </div>
                </form>
            </div>

            <div className={styles.rightSection}></div>
        </div>
    )
}