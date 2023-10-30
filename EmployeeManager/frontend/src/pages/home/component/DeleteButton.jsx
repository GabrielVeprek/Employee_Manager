import {Link} from "react-router-dom";

export function DeleteButton ({id}) {
    return (
        <Link
            className="btn btn-danger mx-2 shadow"
            to={`/confirmDelete/${id}`}
        >Delete
        </Link>
    )
}