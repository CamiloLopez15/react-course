import { Routes, Route } from "react-router-dom";

import { HeroesRoutes } from "@src/heroes";
import { Login } from "@src/auth";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    );
};
