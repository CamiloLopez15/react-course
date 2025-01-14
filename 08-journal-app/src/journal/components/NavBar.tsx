import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid2, Typography } from "@mui/material";

interface NavBarProps {
    drawerWidth: number;
}

function Navbar({ drawerWidth }: NavBarProps) {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: {
                    sm: `calc(100% - ${drawerWidth}px)`,
                },
                ml: {
                    sm: `${drawerWidth}px`,
                },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid2
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                >
                    <Typography variant="h6" noWrap component="div">
                        JournalApp
                    </Typography>

                    <IconButton color="error">
                        <LogoutOutlined />
                    </IconButton>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
