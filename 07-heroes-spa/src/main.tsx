import { BrowserRouter } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeroApp from "./HeroApp";
import "./styles.css";
import 'animate.css';

createRoot(document.querySelector("#root")!).render(
    <StrictMode>
        <BrowserRouter>
            <HeroApp />
        </BrowserRouter>
    </StrictMode>
);
