import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function HomePage() {
    const { user } = useContext(UserContext);
    return (
        <>
            <h2>HomePage</h2>
            <hr />
            <pre aria-label="preElement">{JSON.stringify(user, null, 4)}</pre>
        </>
    );
}

export default HomePage;
