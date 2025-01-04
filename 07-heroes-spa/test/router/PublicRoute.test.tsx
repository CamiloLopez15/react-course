import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";
import { User } from "../../src/auth/types/types";

import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en PublicRoute", () => {
    const login = () => {};
    const logout = () => {};

    const publicTextH1 = "Ruta Pública";
    const privateTextH1 = "Ruta Privada";

    test("Debe de mostrar el children sino está autenticado", () => {
        const contextValue: User = { logged: false, id: "", username: "" };
        render(
            <AuthContext.Provider
                value={{ authState: contextValue, login, logout }}
            >
                <PublicRoute>
                    <h1>{publicTextH1}</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText(publicTextH1)).toBeTruthy();
    });

    test("Debe de navegar si está autenticado", () => {
        const contextValue: User = {
            logged: true,
            id: "123",
            username: "Prueba",
        };

        render(
            <AuthContext.Provider
                value={{ authState: contextValue, login, logout }}
            >
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                <PublicRoute>
                                    <h1>{publicTextH1}</h1>
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/marvel"
                            element={<h1>{privateTextH1}</h1>}
                        />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(privateTextH1)).toBeTruthy();
    });
});
