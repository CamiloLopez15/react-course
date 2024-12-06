import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

createRoot(document.querySelector("#root")!).render(<StrictMode></StrictMode>);
