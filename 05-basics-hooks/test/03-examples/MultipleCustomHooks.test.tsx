import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-example";

describe("Pruebas en el componente MultipleCustomHooks", () => {
    test("debe de mostrar el componente por defecto", () => {
        render(<MultipleCustomHooks />);
        expect(screen).toMatchSnapshot();
        expect(screen.getByText("Información de Pokemon")).toBeTruthy();
        expect(screen.getByText("Cargando...")).toBeTruthy();
    });
});
