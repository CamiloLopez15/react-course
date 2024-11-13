import { useState } from "react";
const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState<number>(initialValue);
    const increment = (amount = 1) => {
        setCounter(counter + amount);
    };
    const decrement = (amount = 1) => {
        if (counter === 0) return;
        setCounter(counter - amount);
    };
    const reset = () => {
        setCounter(initialValue);
    };
    return { counter, increment, decrement, reset };
};

export default useCounter;
