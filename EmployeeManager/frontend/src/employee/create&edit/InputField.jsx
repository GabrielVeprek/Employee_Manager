import {SubmitButton} from "../buttonComponent/SubmitButton.jsx";
import {CancelButton} from "../buttonComponent/CancelButton.jsx";
import {useEditInputField} from "./customeHook/useEditInputField.jsx";
import {FirstName} from "./component/FirstName.jsx";
import {LastName} from "./component/LastName.jsx";
import {Mail} from "./component/Mail.jsx";
import {EntryDate} from "./component/EntryDate.jsx";

export function InputField({id}) {
    const {onSubmit, onInputChange, employee} = useEditInputField(id);
    return (
        (
            <form onSubmit={(event) => onSubmit(event)}>
                <FirstName firstName={employee.firstName} onInputChange={onInputChange}/>
                <LastName lastName={employee.lastName} onInputChange={onInputChange}/>
                <Mail mail={employee.mail} onInputChange={onInputChange}/>
                <EntryDate entryDate={employee.entryDate} onInputChange={onInputChange}/>
                <SubmitButton/>
                <CancelButton/>
            </form>
        )
    )
}