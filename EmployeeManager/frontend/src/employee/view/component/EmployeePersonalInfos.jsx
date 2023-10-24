import {FirstName} from "./FirstName.jsx";
import {LastName} from "./LastName.jsx";
import {Mail} from "./Mail.jsx";
import {EntryDate} from "./EntryDate.jsx";
import {Position} from "./Position.jsx";
import {Salary} from "./Salary.jsx";
import {HolidayAmount} from "./HolidayAmount.jsx";
import {HolidayNext} from "./HolidayNext.jsx";
import {Task} from "./Task.jsx";
import {Overtime} from "./Overtime.jsx";

export function EmployeePersonalInfos({employee}) {


    return (
        <ul className="list-group list-group-flush">
            <FirstName firstName={employee.firstName}/>
            <LastName lastName={employee.lastName}/>
            <Mail mail={employee.mail}/>
        </ul>
    )
}