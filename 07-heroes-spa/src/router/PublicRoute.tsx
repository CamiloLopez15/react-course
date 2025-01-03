import { AuthContext } from "@src/auth";
import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: ReactNode;
}

function PublicRoute({ children }: PublicRouteProps) {
    const {
        authState: { logged },
    } = useContext(AuthContext);

    const lastPath = localStorage.getItem("lastPath") || "/";

    if (logged) return <Navigate to={lastPath} replace />;
    else return children;
}

export { PublicRoute };
