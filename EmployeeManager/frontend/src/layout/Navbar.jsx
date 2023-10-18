import {StatisticButton} from "./buttonComponents/StatisticButton.jsx";
import {CreateEmployeeButton} from "./buttonComponents/CreateEmployeeButton.jsx";
import {HomePageImage} from "./buttonComponents/HomePageImage.jsx";
import {HomePageTitle} from "./buttonComponents/HomePageTitle.jsx";
import {Link} from "react-router-dom";
import {LoginButton} from "./buttonComponents/LoginButton.jsx";

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
                        <LoginButton/>
                        <StatisticButton/>
                        <CreateEmployeeButton/>
                    </div>
                </div>
            </nav>
        </div>
    );
}
