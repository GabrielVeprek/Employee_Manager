import {Link} from "react-router-dom";
import {StatisticButton} from "./buttonComponents/StatisticButton.jsx";
import {CreateEmployeeButton} from "./buttonComponents/CreateEmployeeButton.jsx";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid mt-1">
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid mb-2" src="../src/images/Icon.png" width="140" height="150"/>
                            <span
                                className="font-weight-bold fs-3 text-decoration-underline m-3">Employee Manager</span>
                        </Link>
                    </div>
                    <div>
                        <StatisticButton/>
                        <CreateEmployeeButton/>
                    </div>
                </div>
            </nav>
        </div>
    );
}
