import { render, screen } from "@testing-library/react";
import TodoApp from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";
import { Todo } from "../../src/08-useReducer/todoReducer";

jest.mock("../../src/hooks/useTodo");

const useTodoMock = useTodo as jest.MockedFunction<typeof useTodo>;

const todos: Todo[] = [
    {
        id: 1,
        description: "Piedra del alma",
        done: true,
    },
    {
        id: 2,
        description: "Piedra del poder",
        done: false,
    },
];

const handleNewTodoMock = jest.fn();
const handleDeleteTodoMock = jest.fn();
const handleToggleTodoMock = jest.fn();
const handleUpdatedTodoMock = jest.fn();
const howManyTodo = todos.length;
const howManyTodoPending = todos.filter((todo) => !todo.done).length;

const useTodoMockReturnValues = {
    todos,
    handleNewTodo: handleNewTodoMock,
    handleDeleteTodo: handleDeleteTodoMock,
    handleToggleTodo: handleToggleTodoMock,
    handleUpdatedTodo: handleUpdatedTodoMock,
    howManyTodo,
    howManyTodoPending,
};

describe("Pruebas en el componente TodoApp", () => {
    test("Debe de mostrar el snapshot", () => {
        useTodoMock.mockReturnValue(useTodoMockReturnValues);
        render(<TodoApp />);
        expect(screen).toMatchSnapshot();
    });

    test("Debe de mostrar el componente correctamente", () => {
        useTodoMock.mockReturnValue(useTodoMockReturnValues);
        render(<TodoApp />);
        expect(screen.getByText(todos[0].description)).toBeTruthy();
        expect(screen.getByText(todos[1].description)).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
    });
});
