import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-example";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

const mockedUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;
const mockedUseCounter = useCounter as jest.MockedFunction<typeof useCounter>;

describe("Pruebas en el componente MultipleCustomHooks", () => {
    const imageSprit = "https://i.blogs.es/82d7ef/pokemon/1366_2000.jpeg";

    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    const mockReset = jest.fn();

    mockedUseCounter.mockReturnValue({
        counter: 2,
        increment: mockIncrement,
        decrement: mockDecrement,
        reset: mockReset,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("debe de mostrar el componente por defecto", () => {
        mockedUseFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
        });
        render(<MultipleCustomHooks />);

        expect(screen).toMatchSnapshot();
        expect(screen.getByText("Información de Pokemon")).toBeTruthy();
        expect(screen.getByText("Cargando...")).toBeTruthy();
    });

    test("Debe de mostrar un Pokemon", () => {
        mockedUseFetch.mockReturnValue({
            data: {
                id: 123,
                name: "Prueba 1",
                sprites: {
                    front_default: imageSprit,
                    front_shiny: imageSprit + 1,
                    back_default: imageSprit + 2,
                    back_shiny: imageSprit + 3,
                },
            },
            isLoading: false,
            hasError: false,
        });
        render(<MultipleCustomHooks />);

        const h2Pokemon = screen.getByRole("heading", { level: 2 });
        const sprites = screen.getAllByRole("img");
        const nextButton = screen.getByRole("button", {
            name: "Siguiente",
        }) as HTMLButtonElement;
        const previousButton = screen.getByRole("button", {
            name: "Anterior",
        }) as HTMLButtonElement;

        expect(h2Pokemon.textContent).toContain("#123 - Prueba 1");
        expect(sprites).toHaveLength(4);
        expect(nextButton.disabled).toBeFalsy();
        expect(previousButton.disabled).toBeFalsy();
    });

    test("Debe de llamar la función de incrementar", () => {
        mockedUseFetch.mockReturnValue({
            data: {
                id: 123,
                name: "Prueba 1",
                sprites: {
                    front_default: imageSprit,
                    front_shiny: imageSprit + 1,
                    back_default: imageSprit + 2,
                    back_shiny: imageSprit + 3,
                },
            },
            isLoading: false,
            hasError: false,
        });
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole("button", {
            name: "Siguiente",
        }) as HTMLButtonElement;
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });

    test("Debe de llamar la función de decrementar", () => {
        mockedUseFetch.mockReturnValue({
            data: {
                id: 123,
                name: "Prueba 1",
                sprites: {
                    front_default: imageSprit,
                    front_shiny: imageSprit + 1,
                    back_default: imageSprit + 2,
                    back_shiny: imageSprit + 3,
                },
            },
            isLoading: false,
            hasError: false,
        });
        render(<MultipleCustomHooks />);
        const previousButton = screen.getByRole("button", {
            name: "Anterior",
        }) as HTMLButtonElement;
        fireEvent.click(previousButton);

        expect(mockDecrement).toHaveBeenCalled();
    });
});
