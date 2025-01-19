import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import {
    checkingAuthentication,
    startGoogleSignIn,
} from "../../store/slices/auth/thunks";
import { Link as RouterLink } from "react-router";
import { useAppDispatch } from "../../store/hook";
import { useForm } from "../../hooks/useForm";
import AuthLayout from "../layout/AuthLayout";
import { Google } from "@mui/icons-material";

interface LoginForm {
    email: string;
    password: string;
}

function LoginPage() {
    const dispatch = useAppDispatch();
    const { email, password, onChangeInput } = useForm<LoginForm>({
        email: "ejemplo@google.com",
        password: "1231231",
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login");
        console.log({ email, password });
        dispatch(checkingAuthentication(email, password));
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout headerText="Login">
            <form onSubmit={onSubmit}>
                <Grid2 container>
                    <Grid2
                        size={{
                            xs: 12,
                        }}
                        sx={{
                            mt: 2,
                        }}
                    >
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            onChange={onChangeInput}
                            value={email}
                        />
                    </Grid2>

                    <Grid2
                        size={{
                            xs: 12,
                        }}
                        sx={{
                            mt: 2,
                        }}
                    >
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            onChange={onChangeInput}
                            value={password}
                        />
                    </Grid2>

                    <Grid2
                        container
                        spacing={2}
                        sx={{ mb: 2, mt: 1, width: "100%" }}
                    >
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button variant="contained" fullWidth type="submit">
                                Login
                            </Button>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />{" "}
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 container direction="row" justifyContent="end">
                    <Link
                        color="inherit"
                        to="/auth/register"
                        component={RouterLink}
                    >
                        Crear una cuenta
                    </Link>
                </Grid2>
            </form>
        </AuthLayout>
    );
}

export default LoginPage;
