import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";

describe("Pruebas en el componente GifGridItem", () => {
    const title = "Prueba Gif Item";
    const id = "1";
    const url =
        "https://media4.giphy.com/media/xT9Igqv2kxpyAtfpEk/giphy.gif?cid=a7034673vvmo22tqtu2nzwzct3ky6uhgiyxhg6p8cu36vfzg&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    test("Debería concordar con el Snapshot", () => {
        render(<GifGridItem title={title} id={id} url={url} />);
        expect(screen).toMatchSnapshot();
    });
});
