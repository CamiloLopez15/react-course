import { useForm } from "../hooks/useForm";

const initialValueForm = {
    username: "",
    email: "",
    password: "",
};

const FormWithCustomHook = () => {
    const { email, password, username, onChangeInput, onResetForm } =
        useForm<typeof initialValueForm>(initialValueForm);

    return (
        <>
            <h1>Form with custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onChangeInput}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Camilo@google.com"
                name="email"
                value={email}
                onChange={onChangeInput}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onChangeInput}
            />
            <button
                type="button"
                onClick={onResetForm}
                className="btn btn-primary mt-2"
            >
                Borrar
            </button>
        </>
    );
};

export default FormWithCustomHook;
