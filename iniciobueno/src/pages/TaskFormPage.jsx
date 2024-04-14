import {useForm} from "react-hook-form"

export function TaskFormPage(){
    const {register, handleSubmit}= useForm();
    const onSubmit = handleSubmit(data => {
        console.log(data)
    })
    return(
        <div>Cuerpaso 2 </div>
    )
}
