import { Todo } from "./todoReducer";

interface TodoElementProps {
    todo: Todo;
    handleDeleteTodo: (todo: Todo) => void;
}

function TodoElement({ todo, handleDeleteTodo }: TodoElementProps) {
    const { description, id } = todo;
    return (
        <li
            className="list-group-item d-flex justify-content-between"
            id={String(id)}
        >
            <span className="align-self-center">{description}</span>
            <button
                className="btn btn-danger"
                onClick={() => handleDeleteTodo(todo)}
            >
                Eliminar
            </button>
        </li>
    );
}

export default TodoElement;
