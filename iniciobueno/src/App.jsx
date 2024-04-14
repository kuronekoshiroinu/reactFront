import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {TaskPage} from "./pages/TaskPage"
import {TaskFormPage} from "./pages/TaskFormPage"
import {Navigation} from "./components/Navigation"
import{Toolbar} from "./components/ToolBar/toolbar"
import {Body} from "./components/Body1/body"
import {Form} from "./components/Form/form" 
import {Tabla} from "./components/Tabla/tabla"
import {Celda} from "./components/Celda/celda"
function App() {  

const userprueba = {nombre: "pepito", apellido: "dos", edad: "44", codigo:"mat", descripcion:"ter"}

return (
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Navigate to ="/task"/>} />
          <Route path="/task" element={<TaskPage/>}/>
          <Route path="/task-create" element={<Form/>}/>
          <Route path="/registro" element={<Tabla/>}/>
                    
        </Routes>
              
      </BrowserRouter>  
        
  )
}

export default App
