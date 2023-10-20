import {Link} from "react-router-dom";

export function ViewButton({employee}) {
    return (<Link
        className="btn btn-primary mx-2 shadow"
        to={`/viewEmployee/${employee.id}`}>
        View
    </Link>)
}