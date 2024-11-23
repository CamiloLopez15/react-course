import TodoElement from "./TodoElement";
import { Todo } from "./todoReducer";

interface TodoListProps {
    todos: Todo[];
    handleDeleteTodo: (todo: Todo) => void;
}
function TodoList({ handleDeleteTodo, todos = [] }: TodoListProps) {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoElement
                    todo={todo}
                    key={todo.id}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
