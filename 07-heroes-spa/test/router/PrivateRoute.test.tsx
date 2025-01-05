import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { User } from "../../src/auth/types/types";

import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en las rutas privadas", () => {
    const login = () => {};
    const logout = () => {};

    const publicTextH1 = "Ruta Pública";
    const privateTextH1 = "Ruta Privada";

    test("Debe de mostrar el componente si está autenticado", () => {
        const initialRoute = "/"
        Storage.prototype.setItem = jest.fn();

        const contextValue: User = {
            logged: true,
            id: "1231",
            username: "Camilo",
        };

        render(
            <AuthContext.Provider
                value={{
                    authState: contextValue,
                    login,
                    logout,
                }}
            >
                <MemoryRouter initialEntries={[initialRoute]}>
                    <Routes>
                        <Route path="login" element={<h1>{publicTextH1}</h1>} />
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <h1>{privateTextH1}</h1>
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(privateTextH1)).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", initialRoute);
    });

    test("No Debe de mostrar el componente si no está autenticado", () => {
        const contextValue: User = {
            logged: false,
            id: "1231",
            username: "Camilo",
        };

        render(
            <AuthContext.Provider
                value={{
                    authState: contextValue,
                    login,
                    logout,
                }}
            >
                <MemoryRouter initialEntries={["/"]}>
                    <Routes>
                        <Route path="login" element={<h1>{publicTextH1}</h1>} />
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <h1>{privateTextH1}</h1>
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(publicTextH1)).toBeTruthy();
    });
});
