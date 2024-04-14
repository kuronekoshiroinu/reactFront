import "./celda.css"
export function Celda(params){
    return(
        
        <div class="contenedos">
            <ul class="encabezado">
                <li>{params.datouser.nombre}</li>
                <li>{params.datouser.apellido}</li>
                <li>{params.datouser.edad}</li>
                <li>{params.datouser.codigo}</li>
                <li>{params.datouser.descripcion}</li>
            </ul>
             
        </div>
    )
}