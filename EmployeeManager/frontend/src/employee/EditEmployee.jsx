
import {Create_EditMask} from "./create_editComponent/mask/Create_EditMask.jsx";
import {EditInputFields} from "./create_editComponent/InputFields/EditInputFields.jsx";

export default function EditEmployee() {


    return (
        <Create_EditMask>
            <h2 className="text-center m-4">Edit Employee</h2>
                <EditInputFields/>
        </Create_EditMask>
    );
}
