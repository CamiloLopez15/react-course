import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counterSlice";
import pokemonSlice from "./slices/pokemon/pokemonSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        pokemon: pokemonSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
