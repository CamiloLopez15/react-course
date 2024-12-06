import { Routes, Route, Navigate } from "react-router-dom";
import { Marvel } from "@heroes/pages/Marvel";
import { Login } from "@auth/pages/Login";
import { Dc } from "@heroes/pages/Dc";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/marvel" element={<Marvel />} />
            <Route path="/dc" element={<Dc />} />

            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/marvel"/>} />
        </Routes>
    );
};
