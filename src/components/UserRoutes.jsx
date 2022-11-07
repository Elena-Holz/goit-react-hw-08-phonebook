
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ManePage = lazy(() => import("pages/Mane/ManePage"));
const RegisterPage = lazy(() => import("pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("pages/Login/LoginPage"));
const UserPage = lazy(() => import("pages/UserPage/UserPage"));
const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout.jsx"));

const UserRoutes = () => {
    return (
        // <Suspense fallback={<p>...Load page</p>}>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<ManePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<UserPage />} />
            </Route>
        </Routes>
    )
}
export default UserRoutes;