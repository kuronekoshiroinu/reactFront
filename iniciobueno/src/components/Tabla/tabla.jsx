import { Celda } from "../Celda/celda"
import "./tabla.css"
export function Tabla(){
    const listausers=[{nombre:"p1", apellido:"apa", edad:"e1", codigo:"cod1", descripcion:"d1"},
    {nombre:"p1", apellido:"ap2", edad:"e1", codigo:"cod1", descripcion:"d1"},
    {nombre:"p1", apellido:"ap2", edad:"e1", codigo:"cod1", descripcion:"d1"},
    {nombre:"p1", apellido:"ap2", edad:"e1", codigo:"cod1", descripcion:"d1"},
]

    return(
        <div>
          {listausers.map((usuario) => <Celda datouser={usuario} />)}
        </div>
    )
}