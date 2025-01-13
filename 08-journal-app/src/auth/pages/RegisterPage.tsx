import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import AuthLayout from "../layout/AuthLayout";

function RegisterPage() {
    return (
        <AuthLayout headerText="Registro">
            <form>
                <Grid2 container>
                    <Grid2
                        size={12}
                        sx={{
                            mt: 2,
                        }}
                    >
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth
                        />
                    </Grid2>

                    <Grid2
                        size={12}
                        sx={{
                            mt: 2,
                        }}
                    >
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                        />
                    </Grid2>

                    <Grid2
                        size={12}
                        sx={{
                            mt: 2,
                        }}
                    >
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid2>

                    <Grid2
                        container
                        spacing={2}
                        sx={{ mb: 2, mt: 1, width: "100%" }}
                    >
                        <Grid2 size={12}>
                            <Button variant="contained" fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 container direction="row" justifyContent="end">
                    <Typography mr={1}>¿Ya tienes cuenta?</Typography>
                    <Link
                        color="inherit"
                        to="/auth/login"
                        component={RouterLink}
                    >
                        ingresar
                    </Link>
                </Grid2>
            </form>
        </AuthLayout>
    );
}

export default RegisterPage;
