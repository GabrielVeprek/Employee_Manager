import {Link} from "react-router-dom";
import {StatisticButton} from "./buttonComponents/StatisticButton.jsx";
import {CreateEmployeeButton} from "./buttonComponents/CreateEmployeeButton.jsx";
import {HomePageImage} from "./buttonComponents/HomePageImage.jsx";
import {HomePageTitle} from "./buttonComponents/HomePageTitle.jsx";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid mt-1">
                    <div>
                        <HomePageImage/>
                        <HomePageTitle/>
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
