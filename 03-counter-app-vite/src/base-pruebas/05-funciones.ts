interface User {
    uid: string;
    username: string;
}

const saludar2 = (nombre: string): string => {
    return `Hola, ${nombre}`;
};

const saludar3 = (nombre: string): string => `Hola, ${nombre}`;
const saludar4 = (): string => `Hola Mundo`;

console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

export const getUser = (): User => ({
    uid: "ABC123",
    username: "El_Papi1502",
});

const user = getUser();
console.log(user);

// Tarea
export const getUsuarioActivo = (nombre: string): User => ({
    uid: "ABC567",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
