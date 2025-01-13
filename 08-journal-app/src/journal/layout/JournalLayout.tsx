import { Box } from "@mui/material";
import { ReactNode } from "react";

interface JournalLayoutLayout {
    children: ReactNode;
}

const drawerWidth = 240;

function JournalLayout({ children }: JournalLayoutLayout) {
    return (
        <Box sx={{ display: "flex" }}>
            {/* Navbar */}

            {/* Sidebar */}
            <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
                {/* Toolbar */}
                {children}
            </Box>
        </Box>
    );
}

export default JournalLayout;
