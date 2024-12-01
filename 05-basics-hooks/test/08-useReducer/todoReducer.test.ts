import {
    ActionType,
    Todo,
    todoReducer,
} from "../../src/08-useReducer/todoReducer";

describe("Prueba en el todoReducer", () => {
    const initialState: Todo[] = [
        {
            id: 1,
            description: "demo",
            done: false,
        },
    ];
    test("Debe de regresar el estado inicial", () => {
        const newState = todoReducer(initialState, {
            type: ActionType.none,
            payload: [],
        });
        expect(newState).toBe(initialState);
    });

    test("Debe de agregar un Todo", () => {
        const newTodo = {
            id: 300,
            description: "Soy una nueva demo",
            done: false,
        };
        const newState = todoReducer(initialState, {
            type: ActionType.add,
            payload: newTodo,
        });

        expect(newState).toEqual([...initialState, newTodo]);
        expect(newState).toHaveLength(2);
    });

    test("Debe de eliminar un Todo", () => {
        const newState = todoReducer(initialState, {
            type: ActionType.delete,
            payload: initialState[0],
        });

        expect(newState).toHaveLength(0);
    });

    test("Debe marcar como hecho un Todo", () => {
        const updatedTodo: Todo = {
            ...initialState[0],
            done: !initialState[0].done,
        };

        const newState = todoReducer(initialState, {
            type: ActionType.put,
            payload: updatedTodo,
        });

        expect(newState[0].done).toBe(updatedTodo.done);
        expect(newState).toHaveLength(1);
    });
});
