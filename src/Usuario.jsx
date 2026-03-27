import { useState } from "react"

export default function Usuario() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function guardar(e){
         const response = await fetch("https://hcodyjgsqsotpouxnzsd.supabase.co/rest/v1/usuarios", {
            method: "POST",
            headers: {
                authorization: "Bearer sb_publishable_VPAgRZkgSsb3gCQ1_vLT4w_F7Yyjtz6",
                apikey: "sb_publishable_VPAgRZkgSsb3gCQ1_vLT4w_F7Yyjtz6",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                "nombre": nombre, 
                "email": email, 
                "password": password })
        })
        // Console.log("Usuario guardado")
    }
    return(
        <div>
            <h1>Formulario de usuarios</h1>      
             
            <label>Nombre
              <input type="text" placeholder="Escriba nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
            </label>
      
             <label >Email
              <input type="text" placeholder="Escriba email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </label>
      
               <label >Contraseña
              <input type="text" placeholder="Escriba contraseña" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </label>
      
             <button onClick={guardar}>Enviar</button>

        </div>
    )
}