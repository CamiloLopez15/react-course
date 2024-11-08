import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
    const gifs = [
        {
            id: "1",
            title: "One Punch Man",
            url: "https://example.com/onepunch.jpg",
        },
        { id: "2", title: "Saitama", url: "https://example.com/saitama.jpg" },
    ];
    const mockUseFetchGifs = useFetchGifs as jest.Mock;
    const category = "one punch";
    test("debe de mostrar el loading inicialmente", () => {
        mockUseFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText("Loading..."));
        expect(screen.getByText(category));
    });

    test("debe de mostrar items cuando se cargan las imágenes useFetchGifs", () => {
        mockUseFetchGifs.mockReturnValue({
            gifs,
            isLoading: false,
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole("img")).toHaveLength(2);
    });
});
