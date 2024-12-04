import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import MainApp from "../../src/09-useContext/MainApp";

describe("Pruebas en el componente MainApp", () => {
    test("Debe de mostrar el HomePage", () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText("HomePage")).toBeTruthy();
    });

    test("Debe de mostrar el LoginPage", () => {
        render(
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText("LoginPage")).toBeTruthy();
    });

    test("Debe de mostrar el AboutPage", () => {
        render(
            <MemoryRouter initialEntries={["/about"]}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText("AboutPage")).toBeTruthy();
    });

    test("Debe de dirigir al home si la ruta no existe", () => {
        render(
            <MemoryRouter initialEntries={["/RutaQueNoExiste"]}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText("HomePage")).toBeTruthy();
    });
});
