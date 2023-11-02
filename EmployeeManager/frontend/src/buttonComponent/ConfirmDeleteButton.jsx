import {Link} from "react-router-dom" 

export function ConfirmDeleteButton({deleteEmployee}) {
    return (
        <Link
            className="btn btn-danger mx-2"
            to={"/"}
            onClick={deleteEmployee}>Confirm Delete
        </Link>
    )
}