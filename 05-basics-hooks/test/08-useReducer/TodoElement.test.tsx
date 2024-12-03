import { fireEvent, render, screen } from "@testing-library/react";
import TodoElement from "../../src/08-useReducer/TodoElement";
import { Todo } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en el componente TodoItem", () => {
    const todoProp: Todo = {
        id: 1,
        description: "Piedra del alma",
        done: true,
    };

    const handleDeleteTodoMock = jest.fn();
    const handleToggleTodoMock = jest.fn();
    const handleUpdatedTodoMock = jest.fn();

    const TodoElementProps = {
        todo: todoProp,
        handleDeleteTodo: handleDeleteTodoMock,
        handleToggleTodo: handleToggleTodoMock,
        handleUpdatedTodo: handleUpdatedTodoMock,
    };

    beforeEach(() => jest.clearAllMocks());

    test("Debe de mostrar el componente correctamente", () => {
        render(<TodoElement {...TodoElementProps} />);
        expect(screen).toMatchSnapshot();
    });

    test("El elemento li, debe de tener las clases pertinentes", () => {
        render(<TodoElement {...TodoElementProps} />);

        const liElement = screen.getByRole("listitem");
        expect(liElement.className.trim()).toBe(
            "list-group-item d-flex justify-content-between"
        );
    });

    test("Debe de mostrar el Todo Pendiente de completar", () => {
        render(
            <TodoElement
                {...TodoElementProps}
                todo={{ ...todoProp, done: false }}
            />
        );

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className.trim()).toBe("align-self-center");
    });

    test("Debe de mostrar el Todo completado", () => {
        render(<TodoElement {...TodoElementProps} />);

        const spanElement = screen.getByText(todoProp.description);
        expect(spanElement.className).toContain("text-decoration-line-through");
    });

    test("El botón de cambiar estado debería llamar al toggleTodo", () => {
        render(<TodoElement {...TodoElementProps} />);

        const btnChangeStatus = screen.getByLabelText("btn-change-status");
        fireEvent.click(btnChangeStatus);

        expect(handleToggleTodoMock).toHaveBeenCalledWith(todoProp);
        expect(handleToggleTodoMock).toHaveBeenCalledTimes(1);
    });

    test("El botón de editar debe llamar handleUpdatedTodo", () => {
        render(<TodoElement {...TodoElementProps} />);

        const btnEdit = screen.getByLabelText("btn-edit");
        fireEvent.click(btnEdit);
        fireEvent.click(btnEdit);

        expect(handleUpdatedTodoMock).toHaveBeenCalledWith(todoProp);
        expect(handleUpdatedTodoMock).toHaveBeenCalledTimes(1);
    });

    test("El botón de eliminar debe llamar handleUpdatedTodo", () => {
        render(<TodoElement {...TodoElementProps} />);

        const btnDelete = screen.getByLabelText("btn-delete");
        fireEvent.click(btnDelete);
        fireEvent.click(btnDelete);

        expect(handleDeleteTodoMock).toHaveBeenCalledWith(todoProp);
        expect(handleDeleteTodoMock).toHaveBeenCalledTimes(2);
    });
});
