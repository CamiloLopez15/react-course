import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {
    const { counter, increment, reset, decrement } = useCounter(50);
    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment()}>
                +1
            </button>
            <button className="btn btn-secondary" onClick={() => reset()}>
                Reset
            </button>
            <button className="btn btn-danger" onClick={() => decrement()}>
                -1
            </button>
        </>
    );
};

export default CounterWithCustomHook;
