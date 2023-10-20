import {StatisticButton} from "./buttonComponents/StatisticButton.jsx";
import {HomePageImage} from "./buttonComponents/HomePageImage.jsx";
import {HomePageTitle} from "./buttonComponents/HomePageTitle.jsx";
import {LogoutButton} from "./buttonComponents/LogoutButton.jsx";
import {CreateEmployeeButton} from "./buttonComponents/CreateEmployeeButton.jsx";
import {LoginButton} from "./buttonComponents/LoginButton.jsx";

export default function Navbar({isLoggedIn}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid mt-1">
                    <div>
                        <HomePageImage/>
                        <HomePageTitle/>
                    </div>
                    <div>
                        {isLoggedIn ?
                            <>
                                <LogoutButton isLoggedIn={isLoggedIn}/>
                                <StatisticButton/>
                                <CreateEmployeeButton/>
                            </> :
                            <LoginButton/>}
                    </div>
                </div>
            </nav>
        </div>
    );
}
