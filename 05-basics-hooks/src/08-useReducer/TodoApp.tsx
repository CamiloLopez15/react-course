import { useEffect, useReducer } from "react";
import { ActionType, Todo, todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState: Todo[] = [
    {
        id: new Date().getTime(),
        description: "Recolectar la gema del alma",
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: "Recolectar la gema del Poder",
        done: false,
    },
];

const initReducer = (initialState: Todo[]) => {
    try {
        const todosLocalStorage: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

        if (todosLocalStorage.length < 1) return initialState;
        else return todosLocalStorage;
    } catch (error) {
        console.error("Error get todos localStorage", error);
        return initialState;
    }
};

function TodoApp() {
    const [todos, dispatchTodo] = useReducer(
        todoReducer,
        initialState,
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

    return (
        <>
            <h1>
                TodoApp: 10, <small>pendientes: 2</small>
            </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
}

export default TodoApp;
