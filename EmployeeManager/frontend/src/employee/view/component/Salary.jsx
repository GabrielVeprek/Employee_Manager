export function Salary ({salary}) {
    return(
        <li className="list-group-item">
            <b>Salary : </b>
            {salary + ' $'}
        </li>
    )
}