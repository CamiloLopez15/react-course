import { FormEvent } from "react";
import { useForm } from "../hooks";
import { Todo } from "./todoReducer";

interface FormAddTodo {
    description: string;
}

interface TodoAddProp {
    handleNewTodo: (todo: Todo) => void;
}

function TodoAdd({ handleNewTodo }: TodoAddProp) {
    const { description, onChangeInput, onResetForm } = useForm<FormAddTodo>({
        description: "",
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!description) return;
        const newTodo: Todo = {
            id: new Date().getTime(),
            description,
            done: false,
        };
        handleNewTodo(newTodo);
        onResetForm();
    };

    return (
        <>
            <form className="d-flex gap-2" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="¿Que hay pa hacer?"
                    className="form-control w-50"
                    name="description"
                    value={description}
                    onChange={onChangeInput}
                />
                <button type="submit" className="btn btn-outline-primary">
                    Agregar
                </button>
            </form>
        </>
    );
}

export default TodoAdd;
