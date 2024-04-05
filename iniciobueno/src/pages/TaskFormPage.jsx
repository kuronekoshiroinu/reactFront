import {useForm} from "react-hook-form"

export function TaskFormPage(){
    const {register, handleSubmit}= useForm();
    const onSubmit = handleSubmit(data => {
        console.log(data)
    })
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" 
                placeholder="title" 
                {...register("title", {required: true} )}/><br/>
                <textarea rows="3" 
                placeholder="description"
                {...register("description",{required: true})}></textarea><br/>
                <button>save</button>

            </form>
        </div>
    )
}
