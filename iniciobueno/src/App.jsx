import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {TaskPage} from "./pages/TaskPage"
import {TaskFormPage} from "./pages/TaskFormPage"
import {Navigation} from "./components/Navigation"
import{Toolbar} from "./components/ToolBar/toolbar"
import {Body} from "./components/Body1/body"

function App() {

  return (
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Navigate to ="/task"/>} />
          <Route path="/task" element={<TaskPage/>}/>
          <Route path="/task-create" element={<TaskFormPage/>}/>
          
        </Routes>
        <Body />      
      </BrowserRouter>  
        
  )
}

export default App
