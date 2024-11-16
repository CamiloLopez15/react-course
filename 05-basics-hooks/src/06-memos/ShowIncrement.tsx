import { memo } from "react";

export const ShowIncrement = memo(
    ({ increment }: { increment: (value: number) => void }) => {
        console.log("Me volví a dibujar :(");
        return (
            <button className="btn btn-primary" onClick={() => increment(10)}>
                Incrementar
            </button>
        );
    }
);
