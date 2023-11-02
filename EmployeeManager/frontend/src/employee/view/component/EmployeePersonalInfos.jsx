import {FirstName} from "./FirstName.jsx" 
import {LastName} from "./LastName.jsx" 
import {Mail} from "./Mail.jsx" 
import {CardContainer} from "./CardContainer.jsx" 

export function EmployeePersonalInfos({employee}) {
    return (
     <CardContainer>
                <h6 className="text-dark">Employee - {employee.id}</h6>
                <ul className="list-group list-group-flush">
                    <FirstName firstName={employee.firstName}/>
                    <LastName lastName={employee.lastName}/>
                    <Mail mail={employee.mail}/>
                </ul>
     </CardContainer>
    )
}