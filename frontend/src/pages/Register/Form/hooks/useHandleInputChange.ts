import { useState } from "react";

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

export default function useHandleInputChange() {
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

	// Handle Form Input Change - FUNCTION
	function handleInputChange(value: string, valueMinLenght: number, valueMaxLength: number, userValidKey: string, id: string) {
		console.log(value)
        console.log(id)
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

    return { authData, focusAuth, setFocusAuth, validAuth, handleInputChange }
}