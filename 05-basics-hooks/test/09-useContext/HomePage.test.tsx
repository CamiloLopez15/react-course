import { User, UserContext } from "../../src/09-useContext/context/UserContext";
import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/pages";

describe("Pruebas en el componente HomePage", () => {
    const initialUser: User = {
        email: "camilo@gmail.com",
        id: 0,
        name: "Camilo Lopez",
    };
    test("Debe mostrar el componente sin el usuario sin el contexto", () => {
        render(<HomePage />);
        const preElement = screen.getByLabelText("preElement");
        expect(JSON.parse(preElement.innerHTML)).toEqual({
            id: 0,
            name: "",
            email: "",
        });
    });

    test("Debe mostrar el componente con el usuario y el contexto", () => {
        render(
            <UserContext.Provider
                value={{ user: initialUser, setUser: () => undefined }}
            >
                <HomePage />
            </UserContext.Provider>
        );
        const preElement = screen.getByLabelText("preElement");
        expect(JSON.parse(preElement.innerHTML)).toEqual(initialUser);
    });
});
