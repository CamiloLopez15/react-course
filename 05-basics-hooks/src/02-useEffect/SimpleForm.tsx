import { ChangeEvent, useState } from "react";
import { Message } from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "strider",
        email: "Camilo@google.com",
    });

    const { email, username } = formState;

    const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };

    return (
        <>
            <h1>Simple Form</h1>
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
            {username === "strider2" && <Message />}
        </>
    );
};

export default SimpleForm;
