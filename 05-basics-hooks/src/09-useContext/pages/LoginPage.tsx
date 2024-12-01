import { UserContext } from "../context/UserContext";
import { useContext } from "react";
function LoginPage() {
    const { user, setUser } = useContext(UserContext);

    const newUser = {
        id: 123,
        name: "Camilo",
        email: "camilolopez1506@gmail.com",
    };

    return (
        <>
            <h2>LoginPage</h2>
            <hr />
            <pre>{JSON.stringify(user, null, 4)}</pre>
            <button
                className="btn btn-primary"
                onClick={() => setUser(newUser)}
            >
                Añadir usuario
            </button>
        </>
    );
}

export default LoginPage;
