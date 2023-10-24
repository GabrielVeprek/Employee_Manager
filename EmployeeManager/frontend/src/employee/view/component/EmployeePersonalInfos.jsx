import {FirstName} from "./FirstName.jsx";
import {LastName} from "./LastName.jsx";
import {Mail} from "./Mail.jsx";

export function EmployeePersonalInfos({employee}) {


    return (
        <ul className="list-group list-group-flush">
            <FirstName firstName={employee.firstName}/>
            <LastName lastName={employee.lastName}/>
            <Mail mail={employee.mail}/>
        </ul>
    )
}