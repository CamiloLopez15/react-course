import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";
import { ChangeEvent } from "react";

describe("Pruebas en el hook useForm", () => {
    const initialValue = {
        name: "Camilo",
        email: "camilolopez1506@gmail.com",
    };

    test("Debe de regresar el objeto por defecto", () => {
        const { result } = renderHook(() => useForm(initialValue));

        expect(result.current).toEqual({
            name: initialValue.name,
            email: initialValue.email,
            formState: initialValue,
            onChangeInput: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test("Debe de actualizar el name del formState", () => {
        const { result } = renderHook(() => useForm(initialValue));
        const { onChangeInput } = result.current;

        const newName = "Rodolfo";

        act(() => {
            const simulateEvent = {
                target: {
                    name: "name",
                    value: newName,
                },
            };
            onChangeInput(simulateEvent as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.name).toEqual(newName);
        expect(result.current.formState.name).toEqual(newName);
    });

    test("Debe de actualizar el email del formState", () => {
        const { result } = renderHook(() => useForm(initialValue));
        const { onChangeInput } = result.current;

        const newEmail = "Rodolfo@gmail.com";

        act(() => {
            const simulateEvent = {
                target: {
                    name: "email",
                    value: newEmail,
                },
            };
            onChangeInput(simulateEvent as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.email).toEqual(newEmail);
        expect(result.current.formState.email).toEqual(newEmail);
    });

    test("Debe de devolver al estado por defecto", () => {
        const { result } = renderHook(() => useForm(initialValue));
        const { onChangeInput, onResetForm } = result.current;

        const newEmail = "Rodolfo@gmail.com";

        act(() => {
            const simulateEvent = {
                target: {
                    name: "email",
                    value: newEmail,
                },
            };
            onChangeInput(simulateEvent as ChangeEvent<HTMLInputElement>);
            onResetForm();
        });

        expect(result.current.name).toEqual(initialValue.name);
        expect(result.current.email).toEqual(initialValue.email);
        expect(result.current.formState).toEqual(initialValue);
    });
});
