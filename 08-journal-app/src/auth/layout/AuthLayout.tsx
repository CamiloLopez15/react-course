import { Grid2, Typography } from "@mui/material";
import { ReactNode } from "react";

interface AuthLayoutProps {
    headerText: string;
    children: ReactNode;
}

function AuthLayout({ headerText, children }: AuthLayoutProps) {
    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
                backgroundColor: "primary.main",
                padding: 4,
            }}
        >
            <Grid2
                className="box-shadow"
                size={{
                    xs: 12,
                }}
                sx={{
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 2,
                    width: {
                        sm: "450px",
                    },
                }}
            >
                <Typography variant="h5" sx={{ marginBottom: 1 }}>
                    {headerText}
                </Typography>
                {children}
            </Grid2>
        </Grid2>
    );
}

export default AuthLayout;
