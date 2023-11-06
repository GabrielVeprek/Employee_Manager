import {CardContainer} from "./CardContainer.jsx"
import {DataMask} from "./DataMask.jsx";

export function EmployeeStatisticInfo({employee}) {
    return (
        <CardContainer>
            Personal Statistics
            <ul className="list-group list-group-flush">
                <DataMask text={"Entry Date"} data={employee.entryDate}/>
                <DataMask text={"Position"} data={employee.position}/>
                <DataMask text={"Salary"} data={employee.salary}/>
                <DataMask text={"Task"} data={employee.task}/>
            </ul>
        </CardContainer>
    )
}