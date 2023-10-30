import {Link} from "react-router-dom";

export function ButtonLogin ({handleLogin}) {
    return(
        <Link
            type="submit"
            className="btn btn-outline-success mx-2"
            onClick={handleLogin}
            to={"/login"}>
            Login
        </Link>
    )
}