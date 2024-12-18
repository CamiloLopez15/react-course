import {
    NavLinkRenderProps,
    useNavigate,
    NavLink,
    Link,
} from "react-router-dom";
import { AuthContext } from "@src/auth";
import { useContext } from "react";

const setActiveClass = ({ isActive }: NavLinkRenderProps): string =>
    `nav-item nav-link ${isActive ? "active" : ""}`;

export const Navbar = () => {
    const pages = ["Marvel", "DC", "Search"];
    const {
        authState: { username },
    } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login", {
            replace: true,
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {pages.map((page) => (
                        <NavLink
                            className={setActiveClass}
                            to={`/${page.toLowerCase()}`}
                            key={page}
                        >
                            {page}
                        </NavLink>
                    ))}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {username}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
