import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Prueba del archivo 02 template strings", () => {
    test('Debe retornar "Hola Fernando"', () => {
        const name = "Fernando";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
});
