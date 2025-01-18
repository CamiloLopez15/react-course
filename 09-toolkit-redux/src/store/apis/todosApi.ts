import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

export const todosApi = createApi({
    reducerPath: "todos",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => "/todos",
        }),
        getTodo: builder.query<Todo, number>({
            query: (todoId: number) => `/todos/${todoId}`,
        }),
    }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
