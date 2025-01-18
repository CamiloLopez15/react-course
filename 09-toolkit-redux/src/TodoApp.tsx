import { useGetTodoQuery } from "./store/apis/todosApi";

function TodoApp() {
    const { isLoading, data: todo } = useGetTodoQuery(1);
    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>{isLoading && "Loading"}</h4>
            <pre>...</pre>
            {/* {todos &&
                todos.map(({ completed, id, title }) => (
                    <li key={id}>
                        <span>{title}</span>
                        <span>{JSON.stringify(completed)}</span>
                    </li>
                ))} */}
            {todo && (
                <li key={todo.id}>
                    <span>{todo.title}</span>
                    <span>{JSON.stringify(todo.completed)}</span>
                </li>
            )}
            <button>Next Todo</button>
        </>
    );
}

export default TodoApp;
