export function EntryDate(employee) {
    return (
        <li className="list-group-item">
            <b>Entry Date : </b>
            {employee.entryDate}
        </li>
    )
}