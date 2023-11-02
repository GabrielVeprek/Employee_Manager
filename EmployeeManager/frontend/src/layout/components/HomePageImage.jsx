import {Link} from "react-router-dom" 

export function HomePageImage() {
    return (
        <Link className="navbar-brand" to="/">
            <img className="img-fluid mb-2" src="../src/images/Icon.png" width="140" height="150"/>
        </Link>
    )
}