export function LastName(employee) {
    return (
        <li className="list-group-item">
            <b>Last Name : </b>
            {employee.lastName}
        </li>
    )
}