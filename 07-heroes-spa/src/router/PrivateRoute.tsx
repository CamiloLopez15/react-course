import { AuthContext } from "@src/auth";

import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
    const {
        authState: { logged },
    } = useContext(AuthContext);

    if (logged) {
        return children;
    } else {
        return <Navigate to={"/login"} replace/>;
    }
}

export { PrivateRoute };
