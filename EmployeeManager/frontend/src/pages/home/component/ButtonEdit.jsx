import {Link} from "react-router-dom"

export function ButtonEdit({employeeID}) {
    return (
        <Link
            type="submit"
            className="btn btn-outline-primary mx-2 shadow"
            to={`/editEmployee/${employeeID}`}>
            Edit
        </Link>)
}