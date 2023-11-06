import {CardContainer} from "./CardContainer.jsx"
import {DataMask} from "./DataMask.jsx";

export function EmployeePersonalInfos({employee}) {
    return (
        <CardContainer>
            <h6 className="text-dark">Employee - {employee.id}</h6>
            <ul className="list-group list-group-flush">
                <DataMask text={"First Name"} data={employee.firstName}/>
                <DataMask text={"Last Name "} data={employee.lastName}/>
                <DataMask text={"E-Mail"} data={employee.mail}/>
            </ul>
        </CardContainer>
    )
}