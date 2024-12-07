import { Routes, Route, Navigate } from "react-router-dom";
import { Dc, Marvel } from "@src/heroes";
import { Navbar } from "@src/ui";
import { Login } from "@src/auth";


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/marvel" element={<Marvel />} />
                <Route path="/dc" element={<Dc />} />

                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    );
};
