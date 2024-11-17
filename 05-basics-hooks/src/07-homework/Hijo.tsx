import { memo } from "react";

export const Hijo = memo(
    ({
        number: numero,
        increment: incrementar,
    }: {
        number: number;
        increment: (value: number) => void;
    }) => {
        console.log("  Me volví a generar :(  ");

        return (
            <button
                className="btn btn-primary mr-3"
                onClick={() => incrementar(numero)}
            >
                {numero}
            </button>
        );
    }
);
