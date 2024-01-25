import { AxiosInstance } from 'axios';
import axios from '../http.ts';
import { createUserType, loginUserType } from '../../shared/Types/types.ts';

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

export async function login(credentials: loginUserType) {
    try {
        const res = await axios.post('/api/auth/login', JSON.stringify(credentials), {
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
        console.error(error);
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

export async function logout(axiosPrivate: AxiosInstance) {
    try {
        const res = await axiosPrivate.post('/api/auth/logout');
        return res.data;
    } catch (error) {
        console.log(error)
        return error
    }
}