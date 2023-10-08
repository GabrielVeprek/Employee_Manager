import {Link} from "react-router-dom";

export function StatisticButton(){
    return(
        <Link
            className="btn btn-outline-light border-light shadow mx-2"
            to="/employeeStatistics"
            type="submit"
        >
            Statistics
        </Link>
    )
}