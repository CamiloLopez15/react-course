import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";
describe("Pruebas en el hook useCounter", () => {
    // const valueIncrementParam = 1;
    const initialValue = 100;
    test("Debe de retornar los valores por defecto", () => {
        const { result } = renderHook(() => useCounter());
        const { counter, reset, decrement, increment } = result.current;

        expect(counter).toBe(0);
        expect(reset).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
    });

    test(`Debe de retornar como valor inicial ${initialValue}`, () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;

        expect(counter).toBe(initialValue);
    });

    // test(`Debe incrementar en ${valueIncrementParam}`, () => {
    //     const { result } = renderHook(() => useCounter());
    //     const { counter, reset, decrement, increment } = result.current;

    //     increment(valueIncrementParam);

    //     expect(counter).toBe(0);
    // });
});
