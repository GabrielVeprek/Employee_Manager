import {Link} from "react-router-dom";

export function EditButton({employee}) {
    return (<Link
        className="btn btn-outline-primary mx-2 shadow"
        to={`/editEmployee/${employee.id}`}>
        Edit
    </Link>)
}