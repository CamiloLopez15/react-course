import { AboutPage, HomePage, LoginPage } from "./pages";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

const MainApp = () => {
    return (
        <>
            <Navbar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="/*" element={<Navigate to="/about" />} />
                <Route path="/*" element={<LoginPage />} />
            </Routes>
        </>
    );
};

export default MainApp;
