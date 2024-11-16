import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
    const { counter, decrement, increment, reset } = useCounter(0);
    const [isShow, setIsShow] = useState(false);
    return (
        <section>
            <h1>
                Counter: <Small counter={counter} />
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
