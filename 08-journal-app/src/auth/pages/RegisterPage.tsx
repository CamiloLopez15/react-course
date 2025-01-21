import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import { FormValidations, useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useAppDispatch } from "../../store/hook";
import { startCreatingUserWithEmailPassword } from "../../store/slices/auth/thunks";

interface RegisterForm {
    email: string;
    password: string;
    displayName: string;
}

const formValidations: FormValidations<RegisterForm> = {
    email: [
        (value: string) => value.includes("@"),
        "El correo debe de contener @",
    ],
    password: [
        (value: string) => value.length >= 6,
        "El password debe de contener 6 caracteres",
    ],
    displayName: [
        (value: string) => value.length >= 1,
        "El nombre es obligatorio",
    ],
};

function RegisterPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const {
        displayName,
        email,
        password,
        onChangeInput,
        formValidation: { displayNameInvalid, emailInvalid, passwordInvalid },
        isFormValid,
    } = useForm<RegisterForm>(
        {
            email: "",
            password: "",
            displayName: "",
        },
        formValidations
    );

    const dispatch = useAppDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Register");
        setFormSubmitted(true);
        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword({ email, password, displayName }));
    };

    return (
        <AuthLayout headerText="Registro">
            <h1>FormValid {isFormValid ? "True" : "False"}</h1>
            <form onSubmit={onSubmit}>
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
                            name="displayName"
                            onChange={onChangeInput}
                            value={displayName}
                            error={!!displayNameInvalid && formSubmitted}
                            helperText={displayNameInvalid}
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
                            name="email"
                            onChange={onChangeInput}
                            value={email}
                            error={!!emailInvalid && formSubmitted}
                            helperText={emailInvalid}
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
                            name="password"
                            onChange={onChangeInput}
                            value={password}
                            error={!!passwordInvalid && formSubmitted}
                            helperText={passwordInvalid}
                        />
                    </Grid2>

                    <Grid2
                        container
                        spacing={2}
                        sx={{ mb: 2, mt: 1, width: "100%" }}
                    >
                        <Grid2 size={12}>
                            <Button variant="contained" fullWidth type="submit">
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
