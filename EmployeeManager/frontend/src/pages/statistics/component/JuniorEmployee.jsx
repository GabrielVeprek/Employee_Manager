import {Link} from "react-router-dom";

export function JuniorEmployee({junior, slicedID}) {
    return (
        <>
            <b>Junior Employee : </b>
            <Link to={`/viewEmployee/${junior.id}`}>
                {"ID  " +
                    slicedID}
            </Link>
            {", " +
                junior.firstName +
                " " +
                junior.lastName}
        </>
    )
}