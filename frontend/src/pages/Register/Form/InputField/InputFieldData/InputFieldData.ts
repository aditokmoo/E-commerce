export const inputFieldData = [
    {
        type: 'text',
        label: 'Username',
        name: 'username',
        id: 'username',
        validation: {
            minLength: 2,
            maxLength: 15,
            nameValid: 'usernameValid',
            nameFocus: 'usernameFocus',
            errMsg: '2 to 15 characters\n Must begin with a letter.\n Letters, numbers, underscores, hyphens allowed.',
        }
    },
    {
        type: 'text',
        label: 'First Name',
        name: 'firstName',
        id: 'firstName',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'firstNameValid',
            nameFocus: 'firstNameFocus',
            errMsg: '3 to 15 characters\n Must begin with a letter.\n Letters, numbers, underscores, hyphens allowed.',
        }
    },
    {
        type: 'text',
        label: 'Last Name',
        name: 'lastName',
        id: 'lastName',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'lastNameValid',
            nameFocus: 'lastNameFocus',
            errMsg: '3 to 15 characters\n Must begin with a letter.\n Letters, numbers, underscores, hyphens allowed.',
        }
    },
    {
        type: 'email',
        label: 'Email',
        name: 'email',
        id: 'email',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'emailValid',
            nameFocus: 'emailFocus',
            errMsg: '3 to 30 characters\n Must contain @. and be valid\n Letters, numbers, underscores, hyphens allowed.',
        }
    },
    {
        type: 'password',
        label: 'Password',
        name: 'password',
        id: 'password',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'passwordValid',
            nameFocus: 'passwordFocus',
            errMsg: 'Password must be strong and 6 to 25 characters',
        }
    },
    {
        type: 'confirmPassword',
        label: 'Confirm password',
        name: 'confirmPassword',
        id: 'confirmPassword',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'confirmPasswordValid',
            nameFocus: 'confirmPasswordFocus',
            errMsg: 'Confirmed password must be same as password',
        }
    },
    {
        type: 'phoneNumber',
        label: 'Phone Number',
        name: 'phoneNumber',
        id: 'phoneNumber',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'phoneNumberValid',
            nameFocus: 'phoneNumberFocus',
            errMsg: 'Invalid phone number',
        }
    },
    {
        type: 'country',
        label: 'Country',
        name: 'country',
        id: 'country',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'countryValid',
            nameFocus: 'countryFocus',
            errMsg: 'Invalid country',
        }
    },
    {
        type: 'city',
        label: 'City',
        name: 'city',
        id: 'city',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'cityValid',
            nameFocus: 'cityFocus',
            errMsg: 'Invalid city',
        }
    },
    {
        type: 'postalCode',
        label: 'Postal Code',
        name: 'postalCode',
        id: 'postalCode',
        validation: {
            minLength: 3,
            maxLength: 15,
            nameValid: 'postalCodeValid',
            nameFocus: 'postalCodeFocus',
            errMsg: 'Invalid postal code',
        }
    },
]