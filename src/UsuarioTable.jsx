import { useEffect, useState } from "react"
import { Container, Table, Button, Spinner, Alert } from "react-bootstrap"


// el flow de esta fn es:
export default function UsuarioTable() {
    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)

    async function cargarUsuarios() {//esta fn se encarga de cargar los usuarios desde la API, es una fn asincrona porque hace una peticion a la API que puede tardar un tiempo en responder
        try {//antes de hacer la peticion, limpiamos el error y ponemos el estado de cargando en true para mostrar un spinner mientras se cargan los usuarios
            setError(null)
            setCargando(true)
            const response = await fetch("https://hcodyjgsqsotpouxnzsd.supabase.co/rest/v1/usuarios", {
                method: "GET",
                headers: {
                    authorization: "Bearer sb_publishable_VPAgRZkgSsb3gCQ1_vLT4w_F7Yyjtz6",
                    apikey: "sb_publishable_VPAgRZkgSsb3gCQ1_vLT4w_F7Yyjtz6",
                }
            })
            const data = await response.json()//la respuesta de la API es un array de objetos con los usuarios, lo guardamos en el estado de usuarios
            setUsuarios(data)//guardamos los usuarios en el estado de usuarios para poder renderizarlos en la tabla
        } catch (e) {//si hay un error al cargar los usuarios, guardamos el error en el estado de error para mostrarlo en la pantalla
            setError("No se pudieron cargar los usuarios")
        } finally {
            setCargando(false)
        }
    }

    useEffect(() => {//esta fn se ejecuta cuando el componente se monta, es decir, cuando se renderiza por primera vez en la pantalla
        cargarUsuarios()//llamamos a la fn de cargar usuarios para que se carguen los usuarios al cargar la pagina
    }, [])

    return(
        <Container>
            <h1 className="text-light mb-4">Tabla de usuarios</h1>
            <div className="d-flex align-items-center gap-2 mb-3">
                <Button variant="outline-light" onClick={cargarUsuarios} disabled={cargando}>
                    {cargando ? <Spinner size="sm" animation="border" /> : "Recargar"}
                    {/* spinner es un componente de React Bootstrap que muestra un indicador de carga */ }
                </Button>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.password}</td>
                            <td>
                                <Button size="sm" variant="secondary" className="me-2">Editar</Button>
                                <Button size="sm" variant="outline-danger">Borrar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

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