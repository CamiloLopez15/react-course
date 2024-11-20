interface Todo {
    id: number;
    todo: string;
    done: boolean;
}

interface Action {
    type: string;
    payload: Todo | Todo[];
}

const initialState: Todo[] = [
    {
        id: 1,
        todo: "Recolectar la gema del alma",
        done: false,
    },
];

const todoReducer = (state: Todo[] = initialState, action?: Action): Todo[] => {
    if (!action) return state;
    if (action.type === "[TODO] add one todo")
        return [...state, action.payload as Todo];
    return state;
};

let todos = todoReducer(initialState);

console.log({ state: todos });

const newTodo: Todo = {
    id: 2,
    todo: "Recolectar la piedra del poder",
    done: false,
};

const addTodoAction = {
    type: "[TODO] add one todo",
    payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
