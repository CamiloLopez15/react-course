import { UserContext } from "../context/UserContext";
import { useContext } from "react";
function LoginPage() {
    const {
        user: { email, id, name },
    } = useContext(UserContext);
    console.log(email, id, name);

    return (
        <>
            <h2>LoginPage</h2>
            <hr />
        </>
    );
}

export default LoginPage;
