import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "./../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui/components/Navbar";
import { User } from "./../../../src/auth/types/types";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en el componente de Navbar", () => {
    const login = jest.fn();
    const logout = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const username = "Camilo";
    const contextValue: User = {
        logged: true,
        id: "1231",
        username,
    };

    test("Debe de mostrar todas las páginas", () => {
        const pages = ["Marvel", "DC", "Search"];

        render(
            <AuthContext.Provider
                value={{
                    authState: contextValue,
                    login,
                    logout,
                }}
            >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        for (const page of pages) {
            expect(screen.getByText(page)).toBeTruthy();
        }
    });

    test("Debe de mostrar el nombre del usuario logueado ", () => {
        render(
            <AuthContext.Provider
                value={{
                    authState: contextValue,
                    login,
                    logout,
                }}
            >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(username)).toBeTruthy();
    });

    test("Debe de llamar el logout y navegar cuando se hace click en el botón de logout", () => {
        render(
            <AuthContext.Provider
                value={{
                    authState: contextValue,
                    login,
                    logout,
                }}
            >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const buttonLogout = screen.getByRole("button");

        fireEvent.click(buttonLogout);

        expect(logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {
            replace: true,
        });
    });
});
