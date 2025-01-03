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

    if (logged) return <Navigate to="/home" replace />;
    else return children;
}

export { PublicRoute };
