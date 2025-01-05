import { AuthContext } from "./../auth/context/AuthContext";

import { ReactNode, useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
    const {
        authState: { logged },
    } = useContext(AuthContext);

    const { pathname, search } = useLocation();

    useEffect(() => {
        const lastPath = pathname + search;
        localStorage.setItem("lastPath", lastPath);
    }, [pathname, search]);

    if (logged) {
        return children;
    } else {
        return <Navigate to={"/login"} replace />;
    }
}

export { PrivateRoute };
