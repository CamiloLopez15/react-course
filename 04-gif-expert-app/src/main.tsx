import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GifExpertApp from "./page/GifExpertApp";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GifExpertApp />
    </StrictMode>
);
