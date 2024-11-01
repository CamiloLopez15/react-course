import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el componente CounterApp", () => {
    const initialValue = 100;
    test("El componente debe hacer  match con el snapshot", () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });
    test(`Debe mostrar el valor inicial en ${initialValue}`, () => {
        render(<CounterApp value={initialValue} />);
        expect(screen.getByText(initialValue)).toBeTruthy();
        //? OR
        expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
            String(initialValue)
        );
    });
    test("Debe incrementar con el botón +1", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByTestId("test-button-+1"));
        expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
            String(initialValue + 1)
        );
    });
    test("Debe de decrementar con el botón -1", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByTestId("test-button--1"));
        expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
            String(initialValue - 1)
        );
    });
    test("Debe de resetear valor con el botón reset", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByTestId("test-button-+1"));
        fireEvent.click(screen.getByTestId("test-button-+1"));
        fireEvent.click(screen.getByTestId("test-button-+1"));
        fireEvent.click(screen.getByTestId("test-button-+1"));
        fireEvent.click(screen.getByTestId("test-button-+1"));
        fireEvent.click(
            screen.getByRole("button", { name: "test-button-reset" })
        );
        expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
            String(initialValue)
        );
    });
});
