import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import { getUser, login, logout, refreshToken, register } from "../api/services/authServices";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import useAxiosPrivate from "./useAxiosPrivate";

type loginDataType = {
    email: string,
    password: string
}

export function useSignup() {
    const navigate = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: (credentials: any) => register(credentials),
        onSuccess: (res) => {
            if(res.response?.data?.status === 'fail' || res.response?.data?.status === 'error') return toast.error(res.response.data.message) 
            navigate('/user/verify');
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { mutate, isPending }
}

export function useLogin() {
    const { setCurrentUser, setUserRole } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    // Last location before coming to login
    const from = location.state?.from?.pathname || '/'
    const { mutate, isPending } = useMutation({
        mutationFn: ({email, password}: loginDataType) => login(email, password),
        onSuccess: (res) => {
            if(res.response?.data?.status === 'fail' || res.response?.data?.status === 'error') return toast.error(res.response.data.message)
            // If its okey save token in state
            setCurrentUser(res?.accessToken)
            setUserRole(res?.role)
            // Navigate to last location that he came from
            navigate(from, { replace: true })
        },
        onError: (err) => {
            console.log(err)
            toast.error('Something went wrong!')
        }
    });

    return { mutate, isPending }
}

export function useRefreshToken() {
    const { data, isLoading } = useQuery({
        queryFn: refreshToken,
        queryKey: ["RefreshToken"]
    });

    return { data, isLoading }
}

export function useGetUser() {
    const axiosPrivate = useAxiosPrivate();
    const { data, isLoading, isError } = useQuery({
        queryFn: () => getUser(axiosPrivate),
        queryKey: ["User"],
    });

    return { data, isLoading, isError }
}

export function useLogout() {
    const axiosPrivate = useAxiosPrivate();
    const { mutate, isPending } = useMutation({
        mutationFn: () => logout(axiosPrivate),
        mutationKey: ["logout"]
    });

    return { mutate, isPending }
}