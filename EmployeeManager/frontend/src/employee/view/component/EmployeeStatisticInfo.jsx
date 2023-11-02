import {EntryDate} from "./EntryDate.jsx" 
import {Position} from "./Position.jsx" 
import {Salary} from "./Salary.jsx" 
import {Task} from "./Task.jsx" 
import {CardContainer} from "./CardContainer.jsx" 

export function EmployeeStatisticInfo({employee}) {
    return (
        <CardContainer>
            Personal Statistics
            <ul className="list-group list-group-flush">
                <EntryDate entryDate={employee.entryDate}/>
                <Position position={employee.position}/>
                <Salary salary={employee.salary}/>
                <Task task={employee.task}/>
            </ul>
        </CardContainer>
    )
}