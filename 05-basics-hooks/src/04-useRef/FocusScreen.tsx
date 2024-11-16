import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if (!inputRef.current) return;
        inputRef.current.select();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                ref={inputRef}
            />
            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    );
};
