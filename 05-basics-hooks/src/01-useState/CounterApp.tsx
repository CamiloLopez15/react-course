import { useState } from "react";

const CounterApp = () => {
    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <h1>Counter {counter3}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() =>
                    setCounter((c) => ({ ...c, counter1: counter1 + 1 }))
                }
            >
                +1
            </button>
            <button
                className="btn btn-secondary"
                onClick={() =>
                    setCounter((c) => ({ ...c, counter1: counter1 - 1 }))
                }
            >
                -1
            </button>
        </>
    );
};

export default CounterApp;
