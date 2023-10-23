import {Link} from "react-router-dom";

export function LogoutButton({isLoggedIn}) {
    const handleLogout = () => {
        localStorage.clear()
        isLoggedIn(false)
    }
    return (
        <Link
            className="btn btn-outline-light border-light bg-secondary shadow"
            to="/"
            type="submit"
            onClick={handleLogout}
        >
            LOGOUT
        </Link>
    )
}