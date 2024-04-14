import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {TaskPage} from "./pages/TaskPage"
import {TaskFormPage} from "./pages/TaskFormPage"
import {Body} from "./components/Body1/body"
import { UsersPage } from "./pages/UsersPage"

import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Toolbar } from "./components/ToolBar/toolbar"
import 'tailwindcss/tailwind.css'
function App() {

  return (
    <BrowserRouter>   
      <Header/>  
      <Toolbar/>       
      <Routes>
        <Route path="/" element={<Navigate to ="/task"/>} />
        <Route path="/task" element={<TaskPage/>}/>
        <Route path="/task-create" element={<TaskFormPage/>}/>
        <Route path="/user-register" element={<UsersPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>  
  )
}

export default App
