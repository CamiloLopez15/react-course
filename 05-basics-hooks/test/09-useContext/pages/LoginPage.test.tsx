import {
    User,
    UserContext,
} from "./../../../src/09-useContext/context/UserContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/09-useContext/pages";

const setUserMock = jest.fn();

describe("Pruebas en el componente LoginPage", () => {
    const initialUser: User = {
        email: "juan@gmail.com",
        id: 0,
        name: "Juan Lopez",
    };

    const newUser: User = {
        id: 123,
        name: "Camilo",
        email: "camilolopez1506@gmail.com",
    };

    test("Debe mostrar el componente sin el usuario sin el contexto", () => {
        render(<LoginPage />);
        const preElement = screen.getByLabelText("pre");
        expect(JSON.parse(preElement.innerHTML)).toEqual({
            id: 0,
            name: "",
            email: "",
        });
    });

    test("Debe cambiar el usuario del contexto al hacer clic", () => {
        render(
            <UserContext.Provider
                value={{ user: initialUser, setUser: setUserMock }}
            >
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith(newUser);
    });
});
