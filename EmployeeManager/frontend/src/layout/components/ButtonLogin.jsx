import {Link} from "react-router-dom"

export function ButtonLogin() {
    return (
        <Link
            className="btn btn-outline-light border-light shadow mx-2"
            to="/login"
            type="submit">
            Login
        </Link>
    )
}
