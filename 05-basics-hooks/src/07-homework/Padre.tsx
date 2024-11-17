import { useCallback, useState } from "react";
import { Hijo } from "./Hijo";

const numbers = [2, 4, 6, 8, 10];
export const Padre = () => {
    const [valor, setValor] = useState(0);

    const increment = useCallback((num: number) => {
        setValor((c) => c + num);
    }, []);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {numbers.map((n) => (
                <Hijo key={n} number={n} increment={increment} />
            ))}
            {/* <Hijo /> */}
        </div>
    );
};
