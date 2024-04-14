import{Link} from "react-router-dom"

// import "./toolbar.css"
export function Toolbar(){
    return(
        
        <div id="banner"> 
            <ul class="rounded-md shadow-sm bg-slate-500 m-4">
                <Link to="/task" ><li> item 1 </li></Link>
                <Link to ="/task-create"><li> item 2 </li></Link>
                <Link to ="/user-register"><li> Usuarios </li></Link>
                <li> NoHagoNada1 </li>
                <li> NoHagoNada2 </li>
            </ul>
        </div>
    
    )
}