#Link del proyecto
https://giffy-medinagithub.vercel.app/

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
 Con esto se tomaron deciciones como mover componentes que estaban en el mismo archivo, dejarlos en archivos distintos para evitar re renders.

 8) React Lazy y Suspense Fallback
 la función Lazy lo que hace es cargar de  manera diferida una componentes de tal manera que el JS se carga cómo un chunk, es importante que wrapeado con un Suspense el cual tiene una propiedad fallback que mostrará por mientas un cargado o algo así mientras el componente Lazy se carga.

 9) Formik
 Es una librería de formularios muy popular.

 10) Inifite Scroll
 Aquí usamos la estrategia de el intersaction observer y cuando habíá una interseción, hacíá un request para traer más gifs
 https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API

11) React Helmet react-helmet
React helmet es una librería que nos ayuda en el SEO poniendo etiquetas meta o title, etc

12)  ReactDOM.createPortal
ReactDOM.createPortal es una función que nos permite crear un elemento en un DOM diferente. Aquí se usa para crear un elemento que se pueda mover en el DOM diferente. Esto soluciona problemas cómo que el z-index de un modal no funciona.

13)Styled-Components con emotions
Esta librería nos permite crear estilos en react como componentes obteniendo los beneficios de usar JS en CSS

14) CCS In JS
Esta librería nos permite crear estilos en react. que irán dentro de una etiqueta css={}

 TODO:
 Hacer la API. subirlo a mi portafolio explicando todo el proyecto, y los puntos de este Readme
