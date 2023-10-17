import {Link} from "react-router-dom";

export function SeniorEmployee({id, slicedID, firstName, lastName}) {
    return (
        <>
            <b>Senior Employee : </b>
            <Link to={`/viewEmployee/${id}`}>
                {"ID  " +
                    slicedID}
            </Link>
            {", " +
                firstName +
                " " +
                lastName}
        </>
    )
}