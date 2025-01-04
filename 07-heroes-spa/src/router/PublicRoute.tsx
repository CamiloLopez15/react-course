import { AuthContext } from "./../auth/context/AuthContext";
import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: ReactNode;
}

function PublicRoute({ children }: PublicRouteProps) {
    const {
        authState: { logged },
    } = useContext(AuthContext);

    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    if (logged) return <Navigate to={lastPath} replace />;
    else return children;
}

export { PublicRoute };
