import { TurnedInNot } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    Grid2,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";

interface SideBarProps {
    drawerWidth: number;
}

function Sidebar({ drawerWidth }: SideBarProps) {
    return (
        <Box
            component="nav"
            sx={{
                width: {
                    sm: drawerWidth,
                },
                flexShrink: {
                    sm: 0,
                },
            }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: {
                        sm: "block",
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Camilo López
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {[
                        "Enero",
                        "Febrero",
                        "Marzo",
                        "Abril",
                    ].map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid2 container>
                                  <ListItemText primary={item} />
                                  <ListItemText secondary={"Officia dolor nisi ut minim laboris."} />
                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default Sidebar;
