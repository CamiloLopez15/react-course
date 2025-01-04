import { authReducer } from "./../../../src/auth/context/AuthReducer";
import { Types, User } from "./../../../src/auth/types";

describe("Pruebas en el componente AuthReducer", () => {
    const initialState: User = {
        id: "123",
        logged: false,
        username: "",
    };
    const newUser: User = {
        id: "12312",
        logged: true,
        username: "Nuevo usuario Prueba",
    };

    test("Si no existe el tipo no debe de retornar el estado inicial", () => {
        const state = authReducer(initialState, {
            payload: {
                id: "12312",
                logged: true,
                username: "Prueba",
            },
            type: Types.test,
        });

        expect(state).toEqual(initialState);
    });

    test("Debe de devolver el usuario logueado", () => {
        const state = authReducer(initialState, {
            payload: newUser,
            type: Types.login,
        });

        expect(state).toEqual(newUser);
    });

    test("Debe de devolver cerrar la sesión", () => {
        const state = authReducer(initialState, {
            payload: {},
            type: Types.logout,
        });

        expect(state.id).toBe(initialState.id);
        expect(state.logged).toBe(false);
        expect(state.username).toBe("");
    });
});
