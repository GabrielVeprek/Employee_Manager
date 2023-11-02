import {Link} from "react-router-dom" 

export function SeniorEmployee({senior, slicedID}) {
    return (
        <>
            <b>Senior Employee : </b>
            <Link to={`/viewEmployee/${senior.id}`}>
                {
                    "ID  " +
                    slicedID
                }
            </Link>
            {
                ", " +
                senior.firstName +
                " " +
                senior.lastName
            }
        </>
    )
}