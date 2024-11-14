import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import CounterApp from "./01-useState/CounterApp";
// import HooksApp from "./HooksApp";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
// import SimpleForm from "./02-useEffect/SimpleForm";
import FormWithCustomHook from "./02-useEffect/FormWithCustomHook";

import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <FormWithCustomHook />
    </StrictMode>
);
