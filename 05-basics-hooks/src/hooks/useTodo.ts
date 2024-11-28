import { ActionType, Todo, todoReducer } from "./../08-useReducer/todoReducer";
import { useEffect, useReducer } from "react";

const initReducer = (initialState: Todo[]) => {
    try {
        const dataLocalStorage = localStorage.getItem("todos");
        if (dataLocalStorage) {
            const todosLocalStorage: Todo[] = JSON.parse(dataLocalStorage);
            return todosLocalStorage;
        }
    } catch (error) {
        console.error("Error get todos localStorage", error);
    }
    return initialState;
};

export const useTodo = (initialTodos: Todo[]) => {
    const [todos, dispatchTodo] = useReducer(
        todoReducer,
        initialTodos,
        initReducer
    );

    useEffect(() => {
        const todosJSON = JSON.stringify(todos);
        localStorage.setItem("todos", todosJSON);
    }, [todos]);

    const handleNewTodo = (todo: Todo) => {
        dispatchTodo({ type: ActionType.add, payload: todo });
    };

    const handleDeleteTodo = (todo: Todo) => {
        dispatchTodo({ type: ActionType.delete, payload: todo });
    };

    const handleToggleTodo = (todo: Todo) => {
        dispatchTodo({
            type: ActionType.put,
            payload: {
                ...todo,
                done: !todo.done,
            },
        });
    };

    const handleUpdatedTodo = (todo: Todo) => {
        dispatchTodo({
            type: ActionType.put,
            payload: {
                ...todo,
            },
        });
    };

    const howManyTodo = todos.length;
    const howManyTodoPending = todos.filter((todo) => !todo.done).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleUpdatedTodo,
        howManyTodo,
        howManyTodoPending,
    };
};
