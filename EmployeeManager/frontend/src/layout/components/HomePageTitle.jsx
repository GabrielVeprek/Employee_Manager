import {Link} from "react-router-dom"

export function HomePageTitle() {
    return (
        <Link className="navbar-brand" to="/">
            <span className="font-weight-bold fs-3 text-decoration-underline m-3">Employee Manager</span>
        </Link>
    )
}