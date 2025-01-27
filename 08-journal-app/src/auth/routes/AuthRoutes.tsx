import { Navigate, Route, Routes } from "react-router";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

function AuthRoutes() {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
}

export default AuthRoutes;
