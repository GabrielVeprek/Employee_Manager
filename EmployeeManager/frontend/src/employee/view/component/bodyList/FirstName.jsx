export function FirstName (employee) {
    return(
        <li className="list-group-item">
            <b>First Name : </b>
            {employee.firstName}
        </li>
    )
}