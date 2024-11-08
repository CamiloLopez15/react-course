import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../../src/page/GifExpertApp";

describe("Pruebas en el componente <GifExpertApp />", () => {
    const title = "GifExpertApp";
    const newCategory = "Dragon Ball";
    const oldCategory = "One Punch";
    const addedCategory = () => {
        const inputSearch = screen.getByRole("searchbox");
        const form = screen.getByRole("form");
        fireEvent.change(inputSearch, {
            target: { value: newCategory },
        });
        fireEvent.submit(form);
    };

    test("Pruebas de que el titulo esté", () => {
        render(<GifExpertApp />);
        expect(screen.findByText(title)).toBeTruthy();
    });

    test("El componente debe hacer match con el snapshot", () => {
        render(<GifExpertApp />);
        expect(screen).toMatchSnapshot();
    });

    test("Validar que se añade la nueva categoría", async () => {
        render(<GifExpertApp />);
        addedCategory();

        expect(screen.getByText(oldCategory)).toBeTruthy();
        expect(screen.getByText(newCategory)).toBeTruthy();
    });

    test("Validar que no se añaden categorías duplicadas", async () => {
        render(<GifExpertApp />);
        addedCategory();
        addedCategory();
        addedCategory();
        addedCategory();
        addedCategory();

        expect(screen.getAllByText(newCategory)).toHaveLength(1);
    });
});
