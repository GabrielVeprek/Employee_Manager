
import {CreateEditMask} from "./Create&EditMask.jsx";
import {InputField} from "./InputField.jsx";
import {useParams} from "react-router-dom";

export default function EditEmployee() {
    const {id} = useParams();

    return (
        <CreateEditMask>
            <h2 className="text-center m-4">Edit Employee</h2>
                <InputField id={id}/>
        </CreateEditMask>
    );
}
