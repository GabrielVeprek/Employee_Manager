import {Create_EditMask} from "./component/mask/Create_EditMask.jsx";
import {CreateInputFields} from "./component/inputFields/CreateInputFields.jsx";

export default function CreateEmployee() {


    return (
        <Create_EditMask>
            <h2 className="text-center m-4">Create Employee</h2>
            <CreateInputFields/>
        </Create_EditMask>
    );
}
