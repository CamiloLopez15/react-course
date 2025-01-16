import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
    decrement,
    decrementByAmount,
    increment,
    incrementByAmount,
} from "./store/slices/counter/counterSlice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const amountIncrement = 2;
const amountDecrement = 100;

function App() {
    const { counter } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>count is {counter}</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button
                    onClick={() => dispatch(incrementByAmount(amountIncrement))}
                >
                    Increment by {amountIncrement}
                </button>
                <button
                    onClick={() => dispatch(decrementByAmount(amountDecrement))}
                >
                    Decrement by {amountDecrement}
                </button>
            </div>
        </>
    );
}

export default App;
