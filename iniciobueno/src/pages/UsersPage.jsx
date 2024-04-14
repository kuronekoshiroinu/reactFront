import { RegisterUserBar } from "../components/RegisterUserBar/RegisterUserBar"
import {UsersPanel} from "../components/UsersPanel/UsersPanel"
import { UserInfo } from "../components/UserInfo/UserInfo"
export function UsersPage(){
    return (
        <div>
            <RegisterUserBar/>
            <UsersPanel/>
            <UserInfo/>
        </div>
    )
}