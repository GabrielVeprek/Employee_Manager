export function LastName(employee) {
    return (
        <li className="list-group-item">
            <b>Last Name : </b>
            {employee.employee.employee.lastName}
        </li>
    )
}