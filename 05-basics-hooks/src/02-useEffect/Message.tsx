import { useEffect, useState } from "react";

interface Coords {
    x: number;
    y: number;
}

export const Message = () => {
    const [coords, setCoords] = useState<Coords>({
        x: 0,
        y: 0,
    });
    useEffect(() => {
        const onMouseMove = ({ x, y }: MouseEvent) => setCoords({ x, y });
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    );
};
