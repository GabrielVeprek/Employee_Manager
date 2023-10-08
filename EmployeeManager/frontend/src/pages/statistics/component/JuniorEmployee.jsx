import {Link} from "react-router-dom";

export function JuniorEmployee(junior) {
    console.log(junior)
    return (
        <li className="list-group-item">
            <b>Junior Employee : </b>
            <Link to={`/viewEmployee/${junior.junior.id}`}>
                {"ID  " +
                    junior.junior.slicedJuniorID}
            </Link>
            {", " +
                junior.junior.firstName +
                " " +
                junior.junior.lastName}
        </li>
    )
}