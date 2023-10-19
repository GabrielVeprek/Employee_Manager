import {Link} from "react-router-dom";
export function LogoutButton () {
    const handleLogout = () => {
        localStorage.clear()}
    return(
        <Link
            className="btn btn-outline-light border-light shadow mx-2"
            to="/"
            type="submit"
            onClick={handleLogout}
        >
            LOGOUT
        </Link>
    )
}