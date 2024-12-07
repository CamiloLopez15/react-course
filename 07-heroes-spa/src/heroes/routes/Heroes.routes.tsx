import { Navigate, Route, Routes } from "react-router-dom";
import { Dc, Hero, Marvel, Search } from "@src/heroes";
import { Navbar } from "@src/ui";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/marvel" element={<Marvel />} />
                    <Route path="/dc" element={<Dc />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/hero" element={<Hero />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </main>
        </>
    );
};
