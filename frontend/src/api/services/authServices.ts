import axios from '../http.ts';

type credentialType = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: string,
    country: string,
    city: string,
    postalCode: string
}

export async function register(credentials: credentialType) {
    try {
        const res = await axios.post('/api/auth/signup', credentials);
        const data = res.data;
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}