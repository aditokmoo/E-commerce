import { useState } from 'react';
import { Link } from 'react-router-dom';
// Custom hooks
import { useSignup } from '../../hooks/useAuth';
// React icons
import { MdOutlineArrowBack } from 'react-icons/md';
import { FaInfoCircle } from "react-icons/fa";
// SCSS
import styles from './Register.module.scss';

type focusAuthType = {
    usernameFocus: Boolean,
    firstNameFocus: Boolean,
    lastNameFocus: Boolean,
    emailFocus: Boolean,
    passwordFocus: Boolean,
    confirmPasswordFocus: Boolean,
    phoneNumberFocus: Boolean,
    countryFocus: Boolean,
    cityFocus: Boolean,
    postalCodeFocus: Boolean
}

export default function Register() {
	const { mutate, isPending } = useSignup();
	// User Data
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
	});
	// State for modifing inputs of user data if its valid or not
    const [ validAuth, setValidAuth ] = useState({
        usernameValid: false,
        firstNameValid: false,
        lastNameValid: false,
        emailValid: false,
        passwordValid: false,
        confirmPasswordValid: false,
        phoneNumberValid: false,
        countryValid: false,
        cityValid: false,
        postalCodeValid: false
    });
	// State for modifing inputs of user data if its focused or not
    const [ focusAuth, setFocusAuth ] = useState<focusAuthType>({
        usernameFocus: false,
        firstNameFocus: false,
        lastNameFocus: false,
        emailFocus: false,
        passwordFocus: false,
        confirmPasswordFocus: false,
        phoneNumberFocus: false,
        countryFocus: false,
        cityFocus: false,
        postalCodeFocus: false
    });
	// Destructure authData state
	const {
		username,
		firstName,
		lastName,
		email,
		password,
		confirmPassword,
		phoneNumber,
		country,
		city,
		postalCode
	} = authData;

	// Handle Form Input Change - FUNCTION
	function handleInputChange(value: string, valueMinLenght: number, valueMaxLength: number, userValidKey: string, id: string) {
		// Check if value length is right
		if(value.split('').length < valueMinLenght || value.split('').length > valueMaxLength ) {
			setValidAuth((prevState) => ({ ...prevState, [userValidKey]: true }))
		} else {
			// Check if text is starting with number
			if(/^[0-9]/.test(value)) {
				// if yes show error
				setValidAuth((prevState) => ({ ...prevState, [userValidKey]: true }))
			} else {
				// if not dont show
				setValidAuth((prevState) => ({ ...prevState, [userValidKey]: false }))
			}

			// Check email validation on email field
			if(id === 'email') {
				// Check if email is valid
				const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				// If email isnt valid
				if(!validEmailRegex.test(value)) {
					// show error message
					setValidAuth((prevState) => ({ ...prevState, [userValidKey]: true }))
				} else {
					// hide error message
					setValidAuth((prevState) => ({ ...prevState, [userValidKey]: false }))
				}
			}

			// Check if password is strong
			if(id === 'password') {
				let strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
				if(!strongPasswordRegex.test(value)) {
					// show error message
					setValidAuth((prevState) => ({ ...prevState, [userValidKey]: true }))
				} else {
					// hide error message
					setValidAuth((prevState) => ({ ...prevState, [userValidKey]: false }))
				}
			}

			// Check is password confirmed
			if(id === 'confirmPassword') {
				if(value !== authData.password) {
					// show error message
					setValidAuth((prevState) => ({ ...prevState, [userValidKey]: true }))
				} else {
					// hide error message
					setValidAuth((prevState) => ({ ...prevState, [userValidKey]: false }))
				}
			}
		}

		// if everything is okey dont show error message
		setAuthData((prevState) => ({ ...prevState, [id]: value }))
	}

	if (isPending) return <h2>Loading...</h2>;

	return (
		<div className={styles.register}>
			<Link to="/" className={styles.backBtn}>
				<MdOutlineArrowBack />
			</Link>
			<div className={styles.leftSection}>
				<h2>Create account</h2>
				<p>Welcome to the best web shop</p>
				<div className={styles.imageContainer}>
					<label htmlFor="image">
						<div className={styles.overlay}>
							<span>Change Image</span>
						</div>
					</label>
					<input type="file" id="image" className="image" />
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						mutate(authData);
					}}
				>
					<div className={styles.formContainer}>
						<div className={styles.inputContainer}>
							<label htmlFor="username">Username *</label>
							<input
								type="text"
								id="username"
								value={username}
								className="username"
								autoComplete="off"
								onChange={(e) => handleInputChange(e.target.value, 2, 15, 'usernameValid', e.target.id)}
                                onFocus={() => setFocusAuth(prevState => ({ ...prevState, usernameFocus: true }))}
                                onBlur={() => setFocusAuth(prevState => ({ ...prevState, usernameFocus: false }))}
								required
							/>
                            <p id='username' className={focusAuth.usernameFocus && validAuth.usernameValid ? styles.instructions : styles.offscreen}>
                                <FaInfoCircle /> 2 to 15 characters <br />
                                Must begin with letter. <br />
                                Letters, numbers, underscores, hyphens allowed.
								<span className={styles.requiredTag}>Required</span>
                            </p>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="firstName">First Name *</label>
							<input
								type="text"
								id="firstName"
								value={firstName}
								className="firstName"
								autoComplete="off"
								onChange={(e) => handleInputChange(e.target.value, 3, 15, 'firstNameValid', e.target.id)}
                                onFocus={() => setFocusAuth(prevState => ({ ...prevState, firstNameFocus: true }))}
                                onBlur={() => setFocusAuth(prevState => ({ ...prevState, firstNameFocus: false }))}
								required
							/>
							<p id='firstName' className={focusAuth.firstNameFocus && validAuth.firstNameValid ? styles.instructions : styles.offscreen}>
                                <FaInfoCircle /> 3 to 15 characters <br />
                                Must begin with letter. <br />
                                Letters, numbers, underscores, hyphens allowed.
								<span className={styles.requiredTag}>Required</span>
                            </p>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="lastName">Last Name *</label>
							<input
								type="text"
								id="lastName"
								value={lastName}
								className="lastName"
								autoComplete="off"
								onChange={(e) => handleInputChange(e.target.value, 3, 15, 'lastNameValid', e.target.id)}
                                onFocus={() => setFocusAuth(prevState => ({ ...prevState, lastNameFocus: true }))}
                                onBlur={() => setFocusAuth(prevState => ({ ...prevState, lastNameFocus: false }))}
								required
							/>
							<p id='lastName' className={focusAuth.lastNameFocus && validAuth.lastNameValid ? styles.instructions : styles.offscreen}>
                                <FaInfoCircle /> 3 to 15 characters <br />
                                Must begin with letter. <br />
                                Letters, numbers, underscores, hyphens allowed.
								<span className={styles.requiredTag}>Required</span>
                            </p>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="email">Email *</label>
							<input
								type="email"
								id="email"
								value={email}
								className="email"
								autoComplete="off"
								onChange={(e) => handleInputChange(e.target.value, 3, 30, 'emailValid', e.target.id)}
                                onFocus={() => setFocusAuth(prevState => ({ ...prevState, emailFocus: true }))}
                                onBlur={() => setFocusAuth(prevState => ({ ...prevState, emailFocus: false }))}
								required
							/>
							<p id='email' className={focusAuth.emailFocus && validAuth.emailValid ? styles.instructions : styles.offscreen}>
                                <FaInfoCircle /> 3 to 30 characters <br />
                                Must contain @. and be valid <br />
                                Letters, numbers, underscores, hyphens allowed.
								<span className={styles.requiredTag}>Required</span>
                            </p>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="password">Password *</label>
							<input
								type="password"
								id="password"
								value={password}
								className="password"
								autoComplete="off"
								onChange={(e) => handleInputChange(e.target.value, 6, 25, 'passwordValid', e.target.id)}
                                onFocus={() => setFocusAuth(prevState => ({ ...prevState, passwordFocus: true }))}
                                onBlur={() => setFocusAuth(prevState => ({ ...prevState, passwordFocus: false }))}
								required
							/>
							<p id='password' className={focusAuth.passwordFocus && validAuth.passwordValid ? styles.instructions : styles.offscreen}>
                                <FaInfoCircle /> Password must be strong and 6 to 25 characters 
								<span className={styles.requiredTag}>Required</span>
                            </p>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="confirmPassword">Confirm password *</label>
							<input
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								className="confirmPassword"
								autoComplete="off"
								onChange={(e) => handleInputChange(e.target.value, 6, 25, 'confirmPasswordValid', e.target.id)}
                                onFocus={() => setFocusAuth(prevState => ({ ...prevState, confirmPasswordFocus: true }))}
                                onBlur={() => setFocusAuth(prevState => ({ ...prevState, confirmPasswordFocus: false }))}
								required
							/>
							<p id='confirmPassword' className={focusAuth.confirmPasswordFocus && validAuth.confirmPasswordValid ? styles.instructions : styles.offscreen}>
                                <FaInfoCircle /> Confirmed password must be samed as password 
								<span className={styles.requiredTag}>Required</span>
                            </p>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="phoneNumber">Phone Number *</label>
							<input
								type="text"
								id="phoneNumber"
								value={phoneNumber}
								onChange={(e) => setAuthData((prevState) => ({ ...prevState, phoneNumber: e.target.value }))}
								className="phoneNumber"
							/>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="country">Country *</label>
							<input
								type="text"
								id="country"
								value={country}
								onChange={(e) => setAuthData((prevState) => ({ ...prevState, country: e.target.value }))}
								className="country"
							/>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="city">City *</label>
							<input
								type="text"
								id="city"
								value={city}
								onChange={(e) => setAuthData((prevState) => ({ ...prevState, city: e.target.value }))}
								className="city"
							/>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="postalCode">Postal Code *</label>
							<input
								type="text"
								id="postalCode"
								value={postalCode}
								onChange={(e) => setAuthData((prevState) => ({ ...prevState, postalCode: e.target.value }))}
								className="postalCode"
							/>
						</div>
					</div>

					<div className={styles.formFooter}>
						<button>Create account</button>
						<p>
							You already have account? <Link to="/user/login">Login</Link>
						</p>
					</div>
				</form>
			</div>

			<div className={styles.rightSection} />
		</div>
	);
}
