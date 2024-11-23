import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./08-useReducer/TodoApp";
// import CounterApp from "./01-useState/CounterApp";
// import HooksApp from "./HooksApp";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
// import SimpleForm from "./02-useEffect/SimpleForm";
// import FormWithCustomHook from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-example/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallBackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-homework/Padre";
// import "./08-useReducer/intro-reducer";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <TodoApp />
    </StrictMode>
);
