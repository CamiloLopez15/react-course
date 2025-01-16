import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counter {
    counter: number;
}

const initialState: Counter = {
    counter: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
    },
});

export const { decrement, decrementByAmount, increment, incrementByAmount } =
    counterSlice.actions;

export default counterSlice.reducer;
