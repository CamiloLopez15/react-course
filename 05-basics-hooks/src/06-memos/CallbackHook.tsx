import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
    const [counter, setCounter] = useState(0);

    const increment = useCallback((value: number) => {
        setCounter((c) => c + value);
    }, []);

    return (
        <section>
            <h1>
                UseCallback Hook: <small>{counter}</small>
            </h1>
            <hr />

            <ShowIncrement increment={increment} />
        </section>
    );
};
