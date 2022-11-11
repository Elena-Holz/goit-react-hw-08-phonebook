
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute/PublicRoute.jsx";
import PrivateRoute from "./PrivatePoute/PrivatePoute.jsx";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout.jsx"));
const ManePage = lazy(() => import("pages/Mane/ManePage"));
const RegisterPage = lazy(() => import("pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("pages/Login/LoginPage"));
const UserPage = lazy(() => import("pages/UserPage/UserPage"));
// const NotFoundPage = lazy(() => import("pages/NotFindPage/NotFindPage"));

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<ManePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<UserPage />} />   
                </Route>
                <Route path="*" element={<ManePage />} />
            </Route>
        </Routes>
    )
}
export default UserRoutes;