import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationsNumber: number = 100): string => {
    for (let i = 0; i < iterationsNumber; i++) {
        console.log("Aquí vamos...");
    }
    return `${iterationsNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
    const { counter, decrement, increment, reset } = useCounter(4000);
    const [isShow, setIsShow] = useState(false);
    const memoizedValue = useMemo(() => heavyStuff(counter), [counter]);
    return (
        <section>
            <h1>
                Counter: <small>{memoizedValue}</small>
            </h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment(1)}>
                +1
            </button>
            <button className="btn btn-secondary" onClick={() => reset()}>
                Reset
            </button>
            <button className="btn btn-danger" onClick={() => decrement(1)}>
                -1
            </button>
            <button
                className="btn btn-warning"
                onClick={() => setIsShow(!isShow)}
            >
                Show/hidden {String(isShow)}
            </button>
        </section>
    );
};
