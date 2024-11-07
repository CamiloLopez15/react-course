import { getGifs } from "../../src/services/getGifs";

describe("Pruebas en el servicio GetGifs", () => {
    const category = "One punch man";
    test("debe devolver un array de gifs", async () => {
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});
