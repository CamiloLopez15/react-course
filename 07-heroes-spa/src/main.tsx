import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeroApp from "./components/HeroApp";
import "./styles.css";

createRoot(document.querySelector("#root")!).render(
    <StrictMode>
        <HeroApp />
    </StrictMode>
);
