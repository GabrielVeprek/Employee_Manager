import {Link} from "react-router-dom" 

export function CancelButton() {
    return (
        <Link className="btn btn-danger mx-2" to="/">
            Cancel
        </Link>
    )
}