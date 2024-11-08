import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("Pruebas en el componente AddCategory", () => {
    const onAddCategory = jest.fn();
    const newValueInput = "Saitama";

    test("debe concordar con el Snapshot", () => {
        render(<AddCategory onAddCategory={onAddCategory} />);
        expect(screen).toMatchSnapshot();
    });

    test("no debe de llamar onNewCategory si el input está vacío", () => {
        render(<AddCategory onAddCategory={onAddCategory} />);
        const form = screen.getByRole("form");
        fireEvent.submit(form);

        expect(onAddCategory).not.toHaveBeenCalled();
    });

    test("debe cambiar el valor de la caja de texto", () => {
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input: HTMLInputElement = screen.getByRole("searchbox");

        fireEvent.input(input, {
            target: { value: newValueInput },
        });

        expect(input.value).toBe(newValueInput);
    });

    test("debe de llamar onNewCategory si el input un valor", () => {
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input: HTMLInputElement = screen.getByRole("searchbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: newValueInput } });
        fireEvent.submit(form);
        expect(input.value).toBe("");
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(newValueInput);
    });

});
