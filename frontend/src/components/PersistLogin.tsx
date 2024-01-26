import { useEffect, useState } from "react";
import { refreshToken } from "../api/services/authServices";
import { Outlet } from "react-router";
import { useAuthContext } from "../context/authContext";

export default function PersistLogin() {
    const [ isLoading, setLoading ] = useState(true);
    const { currentUser, setCurrentUser, setUserRole, persist } = useAuthContext();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                const newUserAccess = await refreshToken();
                setCurrentUser(newUserAccess.accessToken);
                setUserRole(newUserAccess.role)
            } catch (error) {
                console.log(error)
            } finally {
                isMounted && setLoading(false)
            }
        }

        !currentUser && persist ? verifyRefreshToken() : setLoading(false);

        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <>
            {!persist ? <Outlet /> : isLoading ? <h2>Loading...</h2> : <Outlet />}
        </>
    )
}