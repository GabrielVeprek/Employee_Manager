import {FirstName} from "./FirstName.jsx";

export function BodyList(employee) {

    return (
        <ul className="list-group list-group-flush">
            <FirstName employee={employee}/>

            <li className="list-group-item">
                <b>E-Mail : </b>
                {employee.mail}
            </li>
            <li className="list-group-item">
                <b>Entry Date : </b>
                {employee.entryDate}
            </li>
        </ul>
    )
}