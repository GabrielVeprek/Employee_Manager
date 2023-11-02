import {SubmitButton} from "../../buttonComponent/SubmitButton.jsx";
import {CancelButton} from "../../buttonComponent/CancelButton.jsx";
import {useEditInputField} from "./customeHook/useEditInputField.jsx";
import {FirstName} from "./component/FirstName.jsx";
import {LastName} from "./component/LastName.jsx";
import {Mail} from "./component/Mail.jsx";
import {EntryDate} from "./component/EntryDate.jsx";
import {CardContainer} from "../view/component/CardContainer.jsx";
import {Position} from "./component/Position.jsx";
import {Salary} from "./component/Salary.jsx";
import {Task} from "./component/Task.jsx";
import {Holiday} from "./component/Holiday.jsx";
import {Overtime} from "./component/Overtime.jsx";
import {HolidayDate} from "./component/HolidayDate.jsx";

export function InputField({id}) {
    const {onSubmit, onInputChange, employee} = useEditInputField(id);

    return (
        (
            <form onSubmit={(event) => onSubmit(event)}>
                <CardContainer>
                    <h6 className="text-primary my-1">Personal Infos</h6>
                    <FirstName firstName={employee.firstName} onInputChange={onInputChange}/>
                    <LastName lastName={employee.lastName} onInputChange={onInputChange}/>
                    <Mail mail={employee.mail} onInputChange={onInputChange}/>
                    <EntryDate entryDate={employee.entryDate} onInputChange={onInputChange}/>
                </CardContainer>
                <CardContainer>
                    <h6 className="text-primary my-1">Personal Statistics</h6>
                    <Position position={employee.position} onInputChange={onInputChange}/>
                    <Salary salary={employee.salary} onInputChange={onInputChange}/>
                    <Task task={employee.task} onInputChange={onInputChange}/>
                    <Holiday amount={employee.holiday.amount} onInputChange={onInputChange}/>
                    <HolidayDate date={employee.holiday.nextHoliday} onInputChange={onInputChange}/>
                    <Overtime overtime={employee.overtimeHour} onInputChange={onInputChange}/>
                </CardContainer>
                <SubmitButton/>
                <CancelButton/>
            </form>
        )
    )
}