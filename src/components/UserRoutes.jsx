
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const RegisterPage = lazy(() => import("pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("pages/Login/LoginPage"));
const ContactsPage = lazy(() => import("pages/Contacts/ContactsPage"));
const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout.jsx"));

const UserRoutes = () => {
    return (
        // <Suspense fallback={<p>...Load page</p>}>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
            </Routes>
        // </Suspense>
    )
}

export default UserRoutes;