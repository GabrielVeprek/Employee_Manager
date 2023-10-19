import {StatisticButton} from "./buttonComponents/StatisticButton.jsx";
import {CreateEmployeeButton} from "./buttonComponents/CreateEmployeeButton.jsx";
import {HomePageImage} from "./buttonComponents/HomePageImage.jsx";
import {HomePageTitle} from "./buttonComponents/HomePageTitle.jsx";
import {LoginButton} from "./buttonComponents/LoginButton.jsx";
import {LogoutButton} from "./buttonComponents/LogoutButton.jsx";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [token, setToken] = useState("")

    useEffect(() => {
        const newToken = localStorage.getItem('jwt');
        setToken(newToken);
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid mt-1">
                    <div>
                        <HomePageImage/>
                        <HomePageTitle/>
                    </div>
                    <div>
                        {token? <LogoutButton/> : <LoginButton/>}
                        <StatisticButton/>
                        <CreateEmployeeButton/>
                    </div>
                </div>
            </nav>
        </div>
    );
}
