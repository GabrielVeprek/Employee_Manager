
import {InputField} from "./InputField.jsx"
import {DefaultMask} from "../../component/DefaultMask.jsx";

export default function CreateEmployee() {
    return (
        <DefaultMask>
            <h2 className="text-center m-4">Create Employee</h2>
            <InputField/>
        </DefaultMask>
    ) 
}
