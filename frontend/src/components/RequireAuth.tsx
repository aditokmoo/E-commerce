import { useLocation, Navigate, Outlet } from "react-router";
import { useAuthContext } from "../context/authContext";

type RequireAuthType = {
    allowedRole: string
}

export default function RequireAuth({ allowedRole }: RequireAuthType) {
    const { currentUser, userRole } = useAuthContext();
    const location = useLocation();

    return userRole === allowedRole ? <Outlet /> : currentUser ? <Navigate to='/' state={{ from: location }} replace /> : <Navigate to='/user/login' state={{ from: location }} replace />
}