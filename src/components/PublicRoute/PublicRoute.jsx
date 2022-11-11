import { Navigate, Outlet } from "react-router-dom";
import { getIsLogin } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export default function PublicRoute() {
    const isLogin = useSelector(getIsLogin);
    if (isLogin) {
        return <Navigate to="/contacts" />
    } 
    return <Outlet />
 }