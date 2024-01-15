import { AxiosInstance } from 'axios';
import axios from '../http.ts';

type createUserType = {
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

export async function register(credentials: createUserType) {
    try {
        const res = await axios.post('/api/auth/signup', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        const data = res.data;
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function login(email: string, password: string) {
    try {
        const res = await axios.post('/api/auth/login', JSON.stringify({ email, password }), {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        return res?.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function refreshToken() {
    try {
        const res = await axios.get('/api/auth/refresh', {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function getUser(axiosPrivate: AxiosInstance) {
    try {
        const res = await axiosPrivate.get('/api/auth/user', {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        console.log(error)
        return error;
    }
}