import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { register } from "../api/services/authServices";
import toast from "react-hot-toast";

export function useSignup() {
    const navigate = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: (credentials: any) => register(credentials),
        onSuccess: (res) => {
            if(res.response?.data?.status === 'fail' || res.response?.data?.status === 'error') return toast.error(res.response.data.message) 
            navigate('/login');
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { mutate, isPending }
}