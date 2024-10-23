import { useState } from "react";

function CounterApp({ value }: { value: number }) {
    const [counter, setCounter] = useState<number>(value);

    const handleAdd = () => setCounter((beforeValue) => beforeValue + 1);
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <span>{counter}</span><br />
            <button onClick={handleAdd}>+ 1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>- 1</button>
        </>
    );
}

export default CounterApp;
