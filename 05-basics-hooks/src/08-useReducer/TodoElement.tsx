import { useState } from "react";
import { Todo } from "./todoReducer";

interface TodoElementProps {
    todo: Todo;
    handleDeleteTodo: (todo: Todo) => void;
    handleToggleTodo: (todo: Todo) => void;
    handleUpdatedTodo: (todo: Todo) => void;
}

function TodoElement({
    todo,
    handleDeleteTodo,
    handleToggleTodo,
    handleUpdatedTodo,
}: TodoElementProps) {
    const { description, id, done } = todo;
    const [descriptionContent, setDescriptionContent] =
        useState<string>(description);
    const [isEdition, setIsEdition] = useState<boolean>(false);

    const handleEdit = () => {
        setIsEdition(!isEdition);
        if (isEdition) {
            handleUpdatedTodo({ ...todo, description: descriptionContent });
        }
        return;
    };

    return (
        <li
            className="list-group-item d-flex justify-content-between"
            id={String(id)}
        >
            {isEdition ? (
                <input
                    type="text"
                    value={descriptionContent}
                    className="form-control w-25"
                    onChange={({ target: { value } }) =>
                        setDescriptionContent(value)
                    }
                />
            ) : (
                <span
                    className={`align-self-center ${
                        done
                            ? "text-decoration-line-through font-monospace fst-italic"
                            : ""
                    }`}
                    aria-label="span"
                >
                    {descriptionContent}
                </span>
            )}
            <div>
                <button
                    className={`btn ${
                        isEdition ? "btn-primary" : "btn-warning"
                    } text-white`}
                    onClick={handleEdit}
                    aria-label="btn-edit"
                >
                    {isEdition ? "Guardar" : "Editar"}
                </button>
                <button
                    className="btn btn-info text-white"
                    onClick={() => handleToggleTodo(todo)}
                    aria-label="btn-change-status"
                >
                    Actualizar estado
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteTodo(todo)}
                    aria-label="btn-delete"
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default TodoElement;
