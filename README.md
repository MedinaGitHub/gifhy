# Conceptos  a manejar en este proyecto

1) React.Memo
React memo sirve para memoizar un componente de tal manera que  solo se renderice si los parametros de las props cambian. Recordar de que si se ejecuta un setState, se re renderea todos los elementos que compartan ese nivel del arbol (funciones y componentes).

2) useCallback
useCallback sirve para memoizar una función. lo que hace es guardar la funcion en memoria y la remplaza cuando cambian las dependencias del segundo parámetro. evitando que la función se vuelva a crear en cada render.

3) useMemo
useMemo sirve para memoizar funciones.

//ojo con estos dos puntos, el memoizar puede ser contra producente en el rendimiento cuando el componente es pequeño y su doble renderizado no tiene impacto en el performance

4)Context
El context tiene 2 partes. la primera es provider, es el que hace el wrap del componente puede tener un value={} con la info que luego  el context va a consumir desde donde se le invoque. el context es el cosumidor. de hecho desde un hook o custom hook como es el caso de este proyecto puedo gestionar el estado global consumido por el context. 

5)Testing
Aquí se uso un poco de @testing-library/react
se testio el home, que cargara, eso en el archivo App.test.js y dentro del archivo __tests__ se intentó testar algo que quedó pendiente.

6) import debounce from "just-debounce-it";
Hay una librería lamada just-___-it   donde el ____  es lo que queremos por ejemplo en este caso una funcionalidad de debounce, entonces es una libreríá donde obtienes solo lo que necesitas.
Para el caso del debounce lo que hace es  ignorar por X tiempo las llamadas a la funcion que tiene adentro

7)Uso de React Developer Tools
Esta herramienta con da funcionalidades para
 A) Ver cuantas veces se re renderea un elemento.
 B) Ver cual es el elementó más pesado, el que más se re renderea,
 C) poder ver el state y props de un componente.
 