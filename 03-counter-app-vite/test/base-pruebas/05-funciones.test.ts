import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";
describe("Test del archivo 05-function", () => {
    test("getUser debe retornar un objeto", () => {
        const testUser = {
            uid: "ABC123",
            username: "El_Papi1502",
        };

        const getUserTest = getUser();

        expect(testUser).toStrictEqual(getUserTest);
    });

    test("getUsuarioActivo debería retornar el mismo objeto", () => {
        const name = "Fernando";
        const testUser = {
            uid: "ABC567",
            username: name,
        };
        const activeUser = getUsuarioActivo(name);

        expect(testUser).toEqual(activeUser);
    });
});
