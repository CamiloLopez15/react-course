import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Test del archivo 06-deses-obj", () => {
    test("usContext debe retornar un objeto", () => {
        const key: string = "Camilo";
        const age: number = 18;

        const testContext = {
            nombreClave: key,
            anios: age,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            },
        };

        const context = usContext({
            clave: key,
            nombre: "Camilo",
            edad: age,
        });

        expect(testContext).toEqual(context)
    });
});
