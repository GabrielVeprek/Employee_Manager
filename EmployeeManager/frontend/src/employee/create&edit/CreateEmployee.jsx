import {DefaultMask} from "../../pages/login/component/DefaultMask.jsx" 
import {InputField} from "./InputField.jsx" 

export default function CreateEmployee() {
    return (
        <DefaultMask>
            <h2 className="text-center m-4">Create Employee</h2>
            <InputField/>
        </DefaultMask>
    ) 
}
