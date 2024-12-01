import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe("Pruebas en el hook useCounter", () => {
    const initialValue = 100;
    const valueIncrementParam = 80;
    const valueDecrementParam = 50;

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

    test(`Debe incrementar a ${initialValue + valueIncrementParam * 2}`, () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, increment } = result.current;

        act(() => {
            increment(valueIncrementParam);
            increment(valueIncrementParam);
        });

        expect(result.current.counter).toBe(counter + valueIncrementParam * 2);
    });

    test(`Debe decrementar a ${initialValue - valueDecrementParam * 2}`, () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, decrement } = result.current;

        act(() => {
            decrement(valueDecrementParam);
            decrement(valueDecrementParam);
        });

        expect(result.current.counter).toBe(counter - valueDecrementParam * 2);
    });

    test(`Debe volver al estado inicial (${initialValue}) al resetear el estado`, () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { reset, decrement, increment } = result.current;

        act(() => {
            increment(valueIncrementParam);
            decrement(valueDecrementParam);
            reset();
        });

        expect(result.current.counter).toBe(initialValue);
    });
});
