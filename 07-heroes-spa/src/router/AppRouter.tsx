import { Routes, Route } from "react-router-dom";

import { HeroesRoutes } from "@src/heroes";
import { PrivateRoute } from "./";
import { Login } from "@src/auth";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    }
                ></Route>
            </Routes>
        </>
    );
};
