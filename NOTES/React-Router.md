# React Router

React Router es una librería (también es un framework, pero eso no nos concierne en estos momentos) que nos permite definir rutas para nuestra aplicación, lo cual nos lleva a poderla dividir entre páginas.

## Inicialización

Para inicializar nuestro router primero debemos importarlo y luego englobar toda nuestra aplicación, por lo general, esto se hace en el mismo archivo donde creamos el root, por ejemplo:

```tsx
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import MainApp from "./09-useContext/MainApp";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <MainApp />
        </StrictMode>
    </BrowserRouter>
);
```

## Definir rutas

Para definir rutas primero debemos englobar la parte de la aplicación que deseamos que varíe o cambie según la ruta en la que estemos en un componente llamado Routes y luego las rutas individuales las llamaremos _Route_, estos tendrán una serie de atributos, un ejemplo de esto es:

```tsx
<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="about" element={<AboutPage />} />

    <Route path="/*" element={<Navigate to="/about" />} />
    <Route path="/*" element={<LoginPage />} />
</Routes>
```

### Routes

Routes es un elemento de React utilizado para englobar todas las rutas de nuestra aplicación.

#### ¿Como usarlo?

```tsx
<Routes>// Todas nuestras rutas</Routes>
```

### Route

Route es un elemento usado para definir una ruta en React. Cuanta con varios Props, algunos de estos son:

-   **Path:**: Es la ruta de a la cual se debe navegar para que se renderice el componente.
-   **Element**: Es el componente que se renderizará cuando se esté en la ruta estipulada en el _path_

#### ¿Como usarlo?

```tsx
<Routes>
    <Route path="/" element={<HomePage />} />
</Routes>
```
