import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./purpleTheme";
import { ReactNode } from "react";

interface AppThemeProps {
    children: ReactNode;
}

function AppTheme({ children }: AppThemeProps) {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default AppTheme;
