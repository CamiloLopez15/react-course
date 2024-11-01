# What is React?

`React` es un _framework_ de _JavaScript_ el cual nos permite crear aplicaciones reactivas y dinámicas para la web, `React` puede ser utilizado en cualquier tipo de aplicación web, desde las más pequeñas hasta las más grandes. `React` usa _JSX_ para funcionar el cual nos permite crear código de _HTML_ con _JavaScript_.

# ¿Como funciona el renderizado en `React`?

Cada vez que es actualizado el estado, una dependencia del useEffect o similar y se dispare el renderizado de nuevo de la app `React` todo el código que está dentro de la aplicación de `React` de volverá a ejecutar, o sea, asignará en memoria de nuevo las variables, funciones, etc. Por este motivo se recomiendo que si deseas crear una función, variable o similar que no tenga que ver con una característica `React` lo defina fuera de la función de React.

# Hooks

_Hooks_ son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase según [React](https://es.legacy.reactjs.org/docs/hooks-intro.html#motivation).

## UseState

`UseState` es un Hook que nos permite guarda el valor de una variable y que el componente recuerde dicho valor cada vez que sea actualizado, nos permite también hacer nuestra aplicación reactiva, lo que simboliza que cuando se actualice el estado también de vuelve a renderizar la aplicación.

### ¿Como usarlo?

`const [state, setState] = useState(initialState)`

-   **State:** El valor del estado en ese momento.
-   **SetState:** Función para actualizar el estado, le podemos mandar simplemente el valor o una función dentro de esta que retorne un valor. Debe ser pura, debe tomar el estado pendiente como único argumento y debe devolver el siguiente estado.
-   **InitialState:** Estado inicial, puede ser un valor directamente o una función que retorne un valor. Cabe recalcar que este valor será ignorado después del primer renderizado. En caso tal que mande una función debe ser pura, o sea, sin argumentos.

### Advertencias

-   Debes llamarlo en el nivel superior del componente. **NO PUEDES LLAMARLO DENTRO DE UN IF, FOR, O SIMILAR**.
-   La función set solo actualiza la variable de estado para el próximo renderizado. Si lees la variable de estado después de llamar a la función set, seguirás obteniendo el valor anterior que estaba en la pantalla antes de tu llamada.

### Tips

-   Por convención, es común nombrar el argumento de estado pendiente como la primera letra del nombre de la variable de estado, como a para age. No obstante, también puedes llamarlo como prevAge o cualquier otra cosa que te resulte más clara.

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

Ahora bien, Jest no es mi útil cuando deseamos validar un componente React y ahí es cuando entra la librería _@testing-library/react_ la cual nos permite evaluar el propio DOM mediante la creación de Snapshot y otros métodos, esta librería le pertenece al grupo de [Testing Library](https://testing-library.com/) este nos permite hacer pruebas en componente de varios Frameworks, en este caso usaremos _React_.

### React Testing Library

Esta librería nos sirve para realizar pruebas en componentes de _React_, esta librería renderiza dicho componentes y nos permite interactuar con a ellos.

#### Render

Es el método que usamos para renderizar un componente y poder hacer prueba con este. Para renderizar el componente debemos hacer lo siguiente: `const render = render(<App prop1={prop1} prop2={prop2} />);` de esta forma se renderiza el componente y tendremos acceso a varías propiedades, estas son:

- **_container_**: Es en resumidas cuentas el window en una página web, nos permite interactuar con el como si fuese desde JavaScript a HTML.
- **_getByText_**: Busca el texto que le enviemos como parámetros en el componente y devuelve el primer elemento que encontró con ese texto.
- **_getByTestId_**: Busca el test id que le enviemos como parámetro en el componente y devuelve el primer elemento que encontró con ese test id. Para definirle el test id a un componente se hace de la siguiente forma `<h1 data-testid="test-title">{title}</h1>`, es un atributo para el elemento.
- **_getByText_**: Busca el texto que le enviemos como parámetros en el componente y devuelve el primer elemento que encontró con ese texto.

#### Screen

Screen es un método que importamos de la librería, este nos dará la información de lo que renderizemos, nos dará el body del HTML que se renderiza al ejecutar el método Render. Este tendrá los mismos métodos que el render y con algunos añadidos, pero no contará con el `container`.
