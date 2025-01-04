import { Types } from "./../../../src/auth/types";

describe("Pruebas en los tipo de AuthReducer", () => {
    test("Debe de mantenerse igual los tipos", () => {
        expect(Types).toEqual({
            login: "[Auth] Login",
            logout: "[Auth] Logout",
            test: "[Test] Prueba",
        });
    });
});
