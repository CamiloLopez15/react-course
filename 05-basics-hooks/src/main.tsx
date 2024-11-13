import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./01-useState/CounterApp";
// import HooksApp from "./HooksApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CounterApp />
    </StrictMode>
);
