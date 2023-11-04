import {Link} from "react-router-dom"

export function ButtonRegister() {
    return (
        <Link
            className="btn btn-outline-primary mx-2"
            to="/register">
            Register
        </Link>)
}