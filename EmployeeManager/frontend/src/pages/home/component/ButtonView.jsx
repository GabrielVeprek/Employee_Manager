import {Link} from "react-router-dom";

export function ButtonView({employeeID}) {
    return (
        <Link
            type="submit"
            className="btn btn-primary mx-2 shadow"
            to={`/viewEmployee/${employeeID}`}>
            View
        </Link>)
}