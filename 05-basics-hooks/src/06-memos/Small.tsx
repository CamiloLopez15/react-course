import { memo } from "react";

export const Small = memo(({ counter }: { counter: number }) => {
    console.log("Me volví a renderizar");

    return <small>{counter}</small>;
});
