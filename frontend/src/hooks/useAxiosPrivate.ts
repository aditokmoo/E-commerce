import { useLocation, useNavigate } from "react-router";
import { axiosPrivate } from "../api/http";
import { refreshToken } from "../api/services/authServices";
import { useAuthContext } from "../context/authContext";
import { useEffect } from "react";

export default function useAxiosPrivate() {
    const { currentUser, setCurrentUser } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(config => {
            if(!config.headers['Authorization']) {
                config.headers['Authorization'] = `Barear ${currentUser}`;
            }
            return config;
        }, (error) => Promise.reject(error))

        const responseIntercept = axiosPrivate.interceptors.response.use(res => res, async (error) => {
            const prevReq = error?.config;
            if(error?.response?.status === 403 && !prevReq?.sent) {
                prevReq.sent = true;
                const newAccessToken = await refreshToken();
                prevReq.headers['Authorization'] = `Barear ${newAccessToken}`;
                setCurrentUser(newAccessToken)
                return axiosPrivate(prevReq)
            }
            navigate('/user/login', { state: { from: location }, replace: true })
            return Promise.reject(error)
        });

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [currentUser, refreshToken])

    return axiosPrivate;
}