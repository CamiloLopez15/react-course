import TodoElement from "./TodoElement";
import { Todo } from "./todoReducer";

interface TodoListProps {
    todos: Todo[];
    handleDeleteTodo: (todo: Todo) => void;
    handleToggleTodo: (todo: Todo) => void;
    handleUpdatedTodo: (todo: Todo) => void;
}
function TodoList({
    handleDeleteTodo,
    handleToggleTodo,
    handleUpdatedTodo,
    todos = [],
}: TodoListProps) {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoElement
                    todo={todo}
                    key={todo.id}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggleTodo={handleToggleTodo}
                    handleUpdatedTodo={handleUpdatedTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
