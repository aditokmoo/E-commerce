import { useEffect, useState } from "react";
import { refreshToken } from "../api/services/authServices";
import { Outlet } from "react-router";
import { useAuthContext } from "../context/authContext";
import { MoonLoader } from "react-spinners";

export default function PersistLogin() {
    const [ isLoading, setLoading ] = useState(true);
    const { state, dispatch } = useAuthContext();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                const newUserAccess = await refreshToken();
                dispatch({ type: 'SET_CURRENT_USER', payload: newUserAccess.accessToken });
                dispatch({ type: 'SET_USER_ROLE', payload: newUserAccess.role });
            } catch (error) {
                console.log(error)
            } finally {
                isMounted && setLoading(false)
            }
        }

        !state.currentUser && state.persist ? verifyRefreshToken() : setLoading(false);

        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <>
            {!state.persist ? <Outlet /> : isLoading ? <MoonLoader color="#171717" className="loader" /> : <Outlet />}
        </>
    )
}