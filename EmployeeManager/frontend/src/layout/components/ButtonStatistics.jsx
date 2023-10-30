import {Link} from "react-router-dom";

export function ButtonStatistics(){
    return(
        <Link
            className="btn btn-outline-light border-light  bg-primary shadow"
            to="/employeeURLs"
            type="submit">
            Statistics
        </Link>
    )
}