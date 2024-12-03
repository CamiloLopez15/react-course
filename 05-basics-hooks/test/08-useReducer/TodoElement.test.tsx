import { render, screen } from "@testing-library/react";
import { Todo } from "../../src/08-useReducer/todoReducer";
import TodoElement from "../../src/08-useReducer/TodoElement";

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

    test("Debe de mostrar el Todo Pendiente de completar", () => {
        render(<TodoElement {...TodoElementProps} />);
        expect(screen).toMatchSnapshot();
    });

    test("Debe de mostrar el Todo Pendiente de completar", () => {
        render(
            <TodoElement
                {...TodoElementProps}
                todo={{ ...todoProp, done: false }}
            />
        );

        const liElement = screen.getByRole("listitem");
        const spanElement = screen.getByLabelText("span");

        expect(spanElement.className.trim()).toBe("align-self-center");
        expect(liElement.className.trim()).toBe(
            "list-group-item d-flex justify-content-between"
        );
    });

    test("Debe de mostrar el Todo completado", () => {
        render(<TodoElement {...TodoElementProps} />);

        const liElement = screen.getByRole("listitem");
        const spanElement = screen.getByText(todoProp.description);

        expect(spanElement.className).toContain("text-decoration-line-through");
        expect(liElement.className).toBe(
            "list-group-item d-flex justify-content-between"
        );
    });
});
