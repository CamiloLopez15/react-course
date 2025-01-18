import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counterSlice";
import pokemonSlice from "./slices/pokemon/pokemonSlice";
import { todosApi } from "./apis/todosApi";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        pokemon: pokemonSlice,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
