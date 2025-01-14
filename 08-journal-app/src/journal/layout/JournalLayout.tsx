import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";

interface JournalLayoutLayout {
    children: ReactNode;
}

const drawerWidth = 240;

function JournalLayout({ children }: JournalLayoutLayout) {
    return (
        <Box sx={{ display: "flex" }}>
            <Navbar drawerWidth={drawerWidth} />

            <Sidebar drawerWidth={drawerWidth} />
            <Box component="main" sx={{ flexGrow: 1, padding: 3, mt: "64px" }}>
                {children}
            </Box>
        </Box>
    );
}

export default JournalLayout;
