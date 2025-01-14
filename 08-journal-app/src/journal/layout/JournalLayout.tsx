import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

interface JournalLayoutLayout {
    children: ReactNode;
}

const drawerWidth = 240;

function JournalLayout({ children }: JournalLayoutLayout) {
    return (
        <Box sx={{ display: "flex" }}>
            <Navbar drawerWidth={drawerWidth} />

            {/* Sidebar */}
            <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
                {/* Toolbar */}
                {children}
            </Box>
        </Box>
    );
}

export default JournalLayout;
