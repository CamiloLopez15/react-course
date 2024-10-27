interface Context {
    nombreClave: string;
    anios: number;
    latlng: {
        lat: number;
        lng: number;
    };
}

export const usContext = ({
    clave,
    nombre,
    edad,
    rango = "Capitán",
}: {
    clave: string;
    nombre: string;
    edad: number;
    rango?: string;
}): Context => {
    console.log({ nombre, rango });
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        },
    };
};
