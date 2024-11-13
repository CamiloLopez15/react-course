import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import CounterApp from "./01-useState/CounterApp";
// import HooksApp from "./HooksApp";
import "./index.css";
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CounterWithCustomHook />
    </StrictMode>
);
