export function Mail(employee) {
    return (
        <li className="list-group-item">
            <b>E-Mail : </b>
            {employee.employee.employee.mail}
        </li>
    )
}