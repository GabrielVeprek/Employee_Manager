import {Link} from "react-router-dom";

export function StatisticButton(){
    return(
        <Link
            className="btn btn-outline-light border-light  bg-primary shadow"
            to="/employeeStatisticsURL"
            type="submit"
        >
            Statistics
        </Link>
    )
}