import{Link} from "react-router-dom"
import "./toolbar.css"
export function Toolbar(){
    return(
        <div id="contenedor">
        <div id="banner"> 
            <ul id="lista1">
                <Link to="/task"><li> home 1 </li></Link>
                <Link to ="/task-create"><li> item 2 </li></Link>
                <li> item 3 </li>
                <li> item 4 </li>
                <li> item 5 </li>
            </ul>
        </div>
    </div>
    )
}