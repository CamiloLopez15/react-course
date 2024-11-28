import { Navigate, Route, Routes } from "react-router";
import { AboutPage, HomePage, LoginPage } from "./pages";

const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="/*" element={<Navigate to="/about"/>} />
                <Route path="/*" element={<LoginPage />} />
            </Routes>
        </>
    );
};

export default MainApp;
