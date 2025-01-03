import { AuthContext } from "../context";
import { useContext } from "react";

export const Login = () => {
    const { login } = useContext(AuthContext);
    const handleLogin = () => {
        login("Camilo");
    };
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
