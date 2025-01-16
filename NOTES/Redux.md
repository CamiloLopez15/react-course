# Redux

Redux es una librería que nos permite manejar un estado global. Antes de explicar como funciona primero desglosemos el vocabulario.

-   _Redux:_ librería encargada de manejar un estado global mediante reducer.
-   _React Redux:_ Sería la forma tradicional de trabajar con Redux en aplicaciones de React. Este tiene el problema que hay mucho _boilerplate_, o sea, tenemos que escribir mucho código para que algo funcione. Esto ocurre principalmente si queremos manejar tareas asíncronas.
-   _Redux toolkit:_ Nos permite implementar el patrón Redux en nuestra aplicaciones de React de forma más sencilla

Redux es el patrón de diseño que maneja los estados mediante reducers. Esto provoca que se predecible el comportamiento de los estados.
Podemos tener actualizaciones de estados asincronícas.

## Funcionamiento de Redux

![Imagen de Flujo de Redux](assets/image.png)

-   Tenemos la _view_ que sería el componente de React que solicita la información, dicha información viene de la fuente de la verdad el cual es el _Store._
-   Tenemos las _Actions_ que son funciones que se encargan de solicitar al _Store_ que el estado sea actualizado.
-   Para llamar dichas acciones las _Actions_ los _dispatchers_. Estos son los encargados de denominar si la acción es asíncrona o síncrona, dentro de los _dispatchers_ están los _middlewares_ que se encargarán de realizar las funciones asíncronas para poder convertir la acción síncrona y llegue al Reducer.
-   _Store_ es el estado y los _reducers_, la fuente de la verdad, dentro de está están los _reducers_ y está el _estado_

Por otra parte, hay que tener en cuenta que **Redux toolkit** trabaja con _Immer_, lo que nos permite mutar el estado directamente desde los _reducer_ sin que haya ningún problema.

## Inicialización de Redux

Para iniciar con Redux primero tenemos que instalarlo.

`npm install @reduxjs/toolkit react-redux`

Una vez, instalados lo primero que vamos a crear es el _store_.

### ConfigureStore.

Este es el primer paso para que configuremos nuestro _Store_. Esta función es utilizada para crear y configurar nuestro _Store_.

#### ¿Como funciona?

```tsx
export const store = configureStore({
    reducer: {
        state: stateSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewarePrueba),
    devTools: true,
    preloadedState: {
        state: "default",
    },
    enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers().concat(enhancersPrueba),
});
```

La función como primer parámetro acepta un objeto que contiene lo siguiente...

-   _reducer_: es el objeto encargado de asignar los _reducers_ de los slices para poder ser usados.
-   _middleware_: estos serán los intermediarios entre las acciones despachas y el estado. Recibe un callback que obtiene como parámetro una función que retorna los valores por defecto. En este caso al usar TypeScript y una tupla se asignan auténticamente.
-   _devTools_: es un valor booleano que es utilizado para activar o desactivar las devTools.
-   _preloadedState_: es los estados por defecto de todos los _reducers_, por ende, debe ser igual al objeto reducer.
-   _enhancers_: son utilizados para extender la funcionalidad de store de _Redux_. Recibe un callback que obtiene como parámetro una función que retorna los valores por defecto. En este caso al usar TypeScript y una tupla se asignan auténticamente.

### Provider

Este es un componente _JSX_ encargado de proveer nuestra aplicación de el _store_ para poder acceder a el y modificarlo.

```tsx
// El store es lo que creamos con ConfigureStore
<Provider store={store}>
    <App />
</Provider>
```

### CreateSlice

Esta función es utilizada para crear los _slices_. Estos son los _reducers_ utilizados por Redux para obtener el estado o modificarlo.

#### ¿Como funciona?

```tsx
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        reducer: (state, payload: PayloadAction<number>) => {
            state.value += 1;
        },
    },
});
```

La función como primer parámetro acepta un objeto que contiene lo siguiente...

-   _name:_ nombre del estado.
-   _initialState:_ el estado inicial de la aplicación.
-   _reducers:_ contendrá todos los métodos que será utilizados para actualizar el estado.

### useSelector

Este es usado para obtener todos los valores del _Store_

#### ¿Como funciona?

```ts
const count = useSelector((state: RootState) => state.counter.value);

// El RootState se crea de la siguiente forma
export type RootState = ReturnType<typeof Store.getState>;
```

Esta recibe como primer argumento un Callback, este es una función que recibe como argumento el objeto del reducer del Store.

Ejecutando esta línea de código podremos obtener los valores del estado. Es recomendado que creemos nuestro propio Hook para hacer esto, se puede hacer de la siguiente forma...

```ts
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "./Store";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### useDispatch

Es utilizado para modificar el estado. Este es el encargado de despachar la acción.

#### ¿Como funciona?

```ts
import { increment } from "./counterSlice";
const dispatch = useDispatch();
dispatch(increment());
```

Para utilizarlo primero llamamos la función de _useDispatch_ y la asignamos a una variable. Luego cuando queramos despechar lo que tenemos que hacer es llamar a esa variable pasando el _reducer_ que es otorgado por el _slice_.

Es recomendado usar una hook para esto, esta hook se puede crear de esta manera...

```ts
// Store.ts
export type AppDispatch = typeof Store.dispatch;
//

import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./Store";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```
