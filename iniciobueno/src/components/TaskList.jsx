import{useEffect} from "react"
import {getAllTasks} from  '../api/task.api.js'
export function TaskList(){
    useEffect(()=> {
        function loadTasks(){
            const res= getAllTasks();
            console.log(res);
        }
        loadTasks();
    }, [])
    
    return <div>Cuerpaso 1</div>
    
}