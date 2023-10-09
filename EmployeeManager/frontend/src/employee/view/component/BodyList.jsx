export function BodyList(employee) {

    return (
        <ul className="list-group list-group-flush">
        <li className="list-group-item">
            <b>First Name : </b>
            {employee.firstName}
        </li>
        <li className="list-group-item">
            <b>Last Name : </b>
            {employee.lastName}
        </li>
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