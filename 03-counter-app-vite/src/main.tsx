import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// import FirstApp from "./FirstApp";
import "./styles.css";
import CounterApp from "./CounterApp";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        {/* <FirstApp title="Titulo" subTitle="Subtitulo"/>
         */}
        <CounterApp value={10} />
    </StrictMode>
);
