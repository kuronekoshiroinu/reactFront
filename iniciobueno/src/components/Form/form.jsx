
import "./form.css"
export function Form(){
    
    return(
          
    <div class="contenedor">
        <form action="">
            <h1>Formulario</h1>
            <h3>Informacion estudiante</h3>
            <div  class="campo">
                <input type="text" placeholder="Nombre" required/>
            </div>
            <div  class="campo">
                <input type="text" placeholder="Apellido" required/>
            </div>
            <div  class="campo">
                <input type="number" placeholder="Edad" required/>
            </div>
            <h3>Informacion materia</h3>
            <div  class="campo">
                <input type="text" placeholder="Codigo" required/>
            </div>
            <div  class="campo">
                <input type="text" placeholder="Descripcion" required/>
            </div> 
            
            <button type="submit" class="boton">Registrar</button>
            
        </form>   
    </div>
    )
}