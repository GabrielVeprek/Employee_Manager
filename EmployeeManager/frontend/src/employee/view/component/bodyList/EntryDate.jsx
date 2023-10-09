export function EntryDate(employee) {
    return (
        <li className="list-group-item">
            <b>Entry Date : </b>
            {employee.employee.employee.entryDate}
        </li>
    )
}