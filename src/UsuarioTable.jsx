import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

export default function UsuarioTable() {
    const [usuarios, setUsuarios] = useState([])

    async function cargarUsuarios() {
        const response = await fetch("https://hcodyjgsqsotpouxnzsd.supabase.co/rest/v1/usuarios", {
            method: "GET",
            headers: {
                authorization: "Bearer sb_publishable_VPAgRZkgSsb3gCQ1_vLT4w_F7Yyjtz6",
                apikey: "sb_publishable_VPAgRZkgSsb3gCQ1_vLT4w_F7Yyjtz6",
            }
        })
        const data = await response.json()
        setUsuarios(data)
    }

    useEffect(() => {
        cargarUsuarios()
    }, [])

    return(
        <div>
            <h1>Tabla de usuarios</h1>
            <button onClick={cargarUsuarios}>Recargar</button>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <button>Editar</button>
                                <button>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}


// el flow para esto sera  paso a paso muy especifico es :
// 1. Crear un estado para guardar los usuarios
// 2. Crear una funcion para cargar los usuarios desde la API
// 3. Llamar a la funcion de cargar usuarios cuando el componente se monte
// 4. Renderizar una tabla con los usuarios cargados
