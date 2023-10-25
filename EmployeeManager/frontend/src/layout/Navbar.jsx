import {StatisticButton} from "./buttonComponents/StatisticButton.jsx";
import {CreateEmployeeButton} from "./buttonComponents/CreateEmployeeButton.jsx";
import {HomePageImage} from "./buttonComponents/HomePageImage.jsx";
import {HomePageTitle} from "./buttonComponents/HomePageTitle.jsx";
import {LogoutButton} from "./buttonComponents/LogoutButton.jsx";
import {LoginButton} from "./buttonComponents/LoginButton.jsx";
import axios from "axios";
import {useContext, useState} from "react";
import {appContext} from "../App.jsx";

export default function Navbar({isLoggedIn}) {
    const [inputValue, setInputValue] = useState()
    const [, setAppState] = useContext(appContext)

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    async function handleSearch() {
        const response = await axios.get(`http://localhost:8080/employee/search/${inputValue}`)
        setAppState((currenState) => ({
            ...currenState, searchResult: response.data
        }))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid mt-1">
                    <HomePageImage/>
                    <HomePageTitle/>
                </div>
                <div className="container offset-md-4">
                    <div className="d-flex align-items-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {isLoggedIn ?
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-dark text-bg-light btn btn-outline-danger"
                                           id="navbarDropdown"
                                           role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            More
                                        </a>
                                        <div className="dropdown-menu bg-white" aria-labelledby="navbarDropdown">
                                            <ol className="li my-1 mx-4">
                                                <StatisticButton/>
                                            </ol>
                                            <ol className="li my-2 mx-1">
                                                <CreateEmployeeButton/>
                                            </ol>
                                            <ol className="li my-1 mx-4">
                                                <LogoutButton isLoggedIn={isLoggedIn}/>
                                            </ol>
                                        </div>
                                    </li>
                                    :
                                    <li>
                                        <LoginButton/>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex align-items-center ml-auto">
                        <form className="d-flex" role="search" onSubmit={event => event.preventDefault()}>
                            <input className="form-control me-2"
                                   aria-label="Search"
                                   type="text"
                                   placeholder="Search"
                                   name="inputValue"
                                   value={inputValue ?? ""}
                                   onChange={onInputChange}
                            ></input>
                            <button className="btn btn-outline-light" type="submit" onClick={handleSearch}>Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
