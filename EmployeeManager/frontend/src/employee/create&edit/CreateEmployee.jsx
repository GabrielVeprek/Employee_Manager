import {CreateEditMask} from "./Create&EditMask.jsx";
import {InputField} from "./InputField.jsx";

export default function CreateEmployee() {
    return (
        <CreateEditMask>
            <h2 className="text-center m-4">Create Employee</h2>
            <InputField/>
        </CreateEditMask>
    );
}
