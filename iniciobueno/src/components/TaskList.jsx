import{useEffect} from "react"

export function TaskList(){
    useEffect(()=> {
        console.log("pagina cargada")
    }, [])
    
    return <div>Task List</div>
    
}