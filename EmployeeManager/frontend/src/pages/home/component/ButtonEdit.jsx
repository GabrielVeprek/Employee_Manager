import {Link} from "react-router-dom"

export function ButtonEdit({employeeID}) {
    return (
        <Link
            className="btn btn-outline-primary mx-2 shadow"
            to={`/editEmployee/${employeeID}`}>
            Edit
        </Link>)
}