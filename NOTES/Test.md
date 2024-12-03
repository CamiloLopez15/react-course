# Pruebas unitarias y de integración

Las pruebas son las que se realizan a los componente para verificar si su funcionamiento es el correcto, pero existe dos tipos de pruebas, las unitarias y las de integración.

Las pruebas unitarias son pruebas realizadas específicamente a un componente, en cambio, las prueba de integración son las que se realizan a varios componentes.

Las pruebas unitarias deben contar con un grupo de características, estás son:

-   Fáciles de escribir.
-   Fáciles de leer.
-   Confiables.
-   Rápidas.
-   Principalmente unitarias.

## Pasos a seguir

Existen pasos a seguir que son conocidos como AAA lo cuales significan Arrange (Arreglar), Act (Actuar), Assert (Afirmar)

### Arrange o arreglar

Es el paso inicial de todo, donde preparamos el ambiente sobre el cual se harán las pruebas, como por ejemplo a escoger el componente que será probado, inicializar variables, hacer importaciones, etc.

### Act o actuar

Acá es donde aplicamos las acciones o estímulos al componente y trabajos sobre el paso anterior, por ejemplo, simulamos clics, se llaman métodos.

### Assert o afirmar

Es observar el comportamiento resultado y validar si es lo que estamos esperando. Por ejemplo, ver si el componente al hacer clic cambia algo, como una variables, o si simplemente no hace nada.

## Jest

En esta sección manejaremos comando, consejo e información respecto a Jest.

### Comandos

#### Describe

La función `describe("Acá va un descripción", () => {...Acá va el código del test})` nos sirve para encapsular un código de Jest y definirle un título, en otras palabras, sirve definirle un título o descripción a un conjunto de pruebas.

#### Test

Se utiliza para definir las pruebas que deseamos hacer, por ejemplo `test("Acá va un descripción", () => {...Acá va el código del test})`.

#### Expect

Se utiliza para establecer el resultamos que esperemos de determinado test, función o prueba que hagamos, y luego concatenamos métodos para definir como queremos que actué el test, si lo que nos arroja la función tiene que ser igual, diferente, que esperas, etc. Por ejemplo ``
expect(message).toBe(`Hola ${name}`);``. En ese caso definimos que message debe ser igual a "Hola ${name}".

Algunos métodos son:

-   **_toBe_**: lo que le enviemos como parámetro debe ser igual a lo que está dentro del `expect`
-   **_toEqual_**: sirve para validar si los que tenemos es igual a lo que está en el `expect`. La diferencia entre `toBe` y `toEqual`, es que el último compara a nivel profundo, sirve para comparar objetos el otro no.
-   **_toStrictEqual_**: funciona igual que el `toEqual` pero esté compara las propiedades que tienes valores en `undefined`, en otra palabra, es más riguroso que el `toEqual`.
-   **_toBeFalsy_**: valida que el valor que esperemos del `expect` sea un valor falsy.
-   **_toBeTruthy_**: sirve para validar si el valor es un truthy.
-   **_toHaveLength_**: sirve para validar si un array tiene el tamaño que nosotros le especifiquemos.
-   **_toContain_**: sirve para validar algo contiene lo que nosotros le especifiquemos.
-   **_toMatchSnapshot_**: sirve para validar si el componente es igual a la Snapshot que tenemos.
-   **_toHaveBeenCalled_**: sirve para validar si un mock de una función fue llamado.
-   **_toHaveBeenCalledTimes_**: sirve para validar si un mock de una función fue llamado la cantidad de veces especificadas.
-   **_toHaveBeenCalledWith_**: sirve para validar si un mock de una función fue llamado con el argumento que le especifiquemos.

Ahora bien, Jest no es mi útil cuando deseamos validar un componente React y ahí es cuando entra la librería _@testing-library/react_ la cual nos permite evaluar el propio DOM mediante la creación de Snapshot y otros métodos, esta librería le pertenece al grupo de [Testing Library](https://testing-library.com/) este nos permite hacer pruebas en componente de varios Frameworks, en este caso usaremos _React_.

#### Mock función

Un _mock_ de una función es la simulación de una función la cual queramos evaluar. Existen dos tipos de funciones, los _hooks_ y las funciones.

##### Hooks

```ts
import { useFetch } from "../../src/hooks/useFetch";
jest.mock("../../src/hooks/useFetch");
const mockedUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

mockedUseFetch.mockReturnValue({
    data: null,
    isLoading: true,
    hasError: false,
});
```

Lo primero que vamos a hacer es importa el _hook_ que deseamos hacerle _mock_. Una vez hecho eso haremos lo siguiente:

-   Tomaremos la ruta en la cual se encuentra alojado el _hook_, y se la pasaremos como parámetro al método de `jest.mock(rutaDelHook)`.
-   En caso de que usemos TypeScript, le deberíamos decir que ahora el _hook_ le hemos hecho un _mock_, por ende, le debemos castear el tipo y se lo asignamos a una nueva variable.
-   Con este tendremos ya la función con un _mock_ y tipificada, gracias a esto podremos acceder fácilmente a todos los tipos. En este caso le definimos lo valores que va a retornar dicho _hook_.

##### Funciones

```ts
const functionMock = jest.fn();
```

En el caso de las funciones es más fácil de hacer el _mock_:

-   Creamos una variables y le asignamos `jest.fn()`, esto realizará el _mock_ de la función.

### React Testing Library

Esta librería nos sirve para realizar pruebas en componentes de _React_, esta librería renderiza dicho componentes y nos permite interactuar con a ellos.

#### Render

Es el método que usamos para renderizar un componente y poder hacer prueba con este. Para renderizar el componente debemos hacer lo siguiente: `const render = render(<App prop1={prop1} prop2={prop2} />);` de esta forma se renderiza el componente y tendremos acceso a varías propiedades, estas son:

-   **_container_**: Es en resumidas cuentas el window en una página web, nos permite interactuar con el como si fuese desde JavaScript a HTML.
-   **_getByText_**: Busca el texto que le enviemos como parámetros en el componente y devuelve el primer elemento que encontró con ese texto.
-   **_getByTestId_**: Busca el test id que le enviemos como parámetro en el componente y devuelve el primer elemento que encontró con ese test id. Para definirle el test id a un componente se hace de la siguiente forma `<h1 data-testid="test-title">{title}</h1>`, es un atributo para el elemento.
-   **_getByText_**: Busca el texto que le enviemos como parámetros en el componente y devuelve el primer elemento que encontró con ese texto.

### WaitFor

WaitFor es una función de la librería de `testing-library/react` que la utilizamos para esperar, recibe una _call-function_ la cual debe tener una expresión de Jest, esta se ejecutará y si se cumple sigue sino arroja un error, funciona de forma similar a una promesa, la utilizamos cuando deseamos que las pruebas se ejecuten cuando la interface de usuario haya cargado cierto contenido, por ejemplo.

### RenderHook

Los utilizamos para renderizar un hook y hacer pruebas de este, esto simula una aplicación de `React` para que pueda funcionar el hook. Dicho función recibe una _call-function_ y dentro de esa función debemos llamar el hook.

#### Screen

Screen es un método que importamos de la librería, este nos dará la información de lo que renderizemos, nos dará el body del HTML que se renderiza al ejecutar el método Render. Este tendrá los mismos métodos que el render y con algunos añadidos, pero no contará con el `container`.

### Act

Es usado cuando deseamos validar un hook que dispara la actualización de un estado.
