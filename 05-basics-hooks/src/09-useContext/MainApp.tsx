import { AboutPage, HomePage, LoginPage } from "./pages";
import { Navigate, Route, Routes } from "react-router";
import UserProvider from "./context/UserProvider";
import Navbar from "./components/Navbar";

const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="/*" element={<Navigate to="/about" />} />
                <Route path="/*" element={<LoginPage />} />
            </Routes>
        </UserProvider>
    );
};

export default MainApp;
