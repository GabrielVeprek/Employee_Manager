import {Link} from "react-router-dom" 
export function HomeButton() {
    return (
        <Link className="btn btn-outline-primary my-3 shadow" to="/">
            HOME
        </Link>
    )
}