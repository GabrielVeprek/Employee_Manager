import {Link} from "react-router-dom";

export function ButtonCancel() {
    return (
        <Link className="btn btn-outline-light border-light bg-secondary shadow "
              to={"/"}>Cancel
        </Link>
    )
}