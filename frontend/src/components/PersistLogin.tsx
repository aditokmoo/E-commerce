import { useEffect, useState } from "react";
import { refreshToken } from "../api/services/authServices";
import { Outlet } from "react-router";
import { useAuthContext } from "../context/authContext";

export default function PersistLogin() {
    const [ isLoading, setLoading ] = useState(true);
    const { currentUser, setCurrentUser, setUserRole } = useAuthContext();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const newUserAccess = await refreshToken();
                setCurrentUser(newUserAccess.accessToken);
                setUserRole(newUserAccess.role)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        !currentUser ? verifyRefreshToken() : setLoading(false);
    }, []);

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`authToken: ${currentUser}`);
    }, [isLoading])

    return (
        <>
            {isLoading ? <h2>Loading...</h2> : <Outlet />}
        </>
    )
}