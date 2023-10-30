import {Link} from "react-router-dom";

export function ButtonDelete({employeeID}) {
    return (
        <Link
            type="submit"
            className="btn btn-danger mx-2 shadow"
            to={`/confirmDelete/${employeeID}`}>
            Delete
        </Link>
    )
}