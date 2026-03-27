// el flow para esto sera  paso a paso muy especifico es : 
// 1. Crear un estado para guardar los usuarios
// 2. Crear una funcion para cargar los usuarios desde la API
// 3. Llamar a la funcion de cargar usuarios cuando el componente se monte
// 4. Renderizar una tabla con los usuarios cargados
// 5. Agregar un boton para recargar los usuarios manualmente
// 6. Agregar un estado para manejar el error en caso de que no se puedan cargar los usuarios
// 7. Agregar un estado para manejar el cargando mientras se cargan los usuarios


//{
//  el component spinner es un componente de React Bootstrap que muestra un indicador de carga, 
//  se muestra cuando el estado de cargando es true y se oculta cuando es false, 
//  el boton de recargar se deshabilita mientras se cargan los usuarios
//  para evitar que se hagan varias peticiones a la API al mismo tiempo,
//  el mensaje de error se muestra cuando el estado de error no es null, y 
//  se oculta cuando el estado de error es null
// }



// Los componentes de react-bootstrap son componentes que use fueron =>  los siguientes => 
// Container, Table, Button, Spinner, Alert, 
// estos componentes nos permiten crear una interfaz de 
// usuario con estilos predefinidos 
// y responsivos sin tener que escribir CSS personalizado.