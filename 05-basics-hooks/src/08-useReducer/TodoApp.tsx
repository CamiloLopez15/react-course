import { useTodo } from "../hooks/useTodo";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

function TodoApp() {
    const {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleUpdatedTodo,
        howManyTodo,
        howManyTodoPending,
    } = useTodo([]);

    return (
        <>
            <h1>
                TodoApp: {howManyTodo},{" "}
                <small>pendientes: {howManyTodoPending}</small>
            </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggleTodo={handleToggleTodo}
                        handleUpdatedTodo={handleUpdatedTodo}
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
