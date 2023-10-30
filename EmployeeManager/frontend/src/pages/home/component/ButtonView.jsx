import {Link} from "react-router-dom";

export function ButtonView({employee}) {
    return (<Link
        className="btn btn-primary mx-2 shadow"
        to={`/viewEmployee/${employee.id}`}>
        View
    </Link>)
}