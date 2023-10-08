import {Create_EditMask} from "./create_editComponent/mask/Create_EditMask.jsx";
import {CreateInputFields} from "./create_editComponent/InputFields/CreateInputFields.jsx";

export default function CreateEmployee() {


    return (
        <Create_EditMask>
            <h2 className="text-center m-4">Create Employee</h2>
            <CreateInputFields/>
        </Create_EditMask>
    );
}
