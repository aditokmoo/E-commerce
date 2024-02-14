import { useLocation, Navigate, Outlet } from "react-router";
import { useAuthContext } from "../context/authContext";

type RequireAuthType = {
    allowedRole: string
}

export default function RequireAuth({ allowedRole }: RequireAuthType) {
    const { state } = useAuthContext();
    const location = useLocation();

    return state.userRole === allowedRole ? <Outlet /> : state.currentUser ? <Navigate to='/' state={{ from: location }} replace /> : <Navigate to='/user/login' state={{ from: location }} replace />
}