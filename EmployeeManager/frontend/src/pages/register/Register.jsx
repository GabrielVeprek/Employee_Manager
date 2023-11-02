import {Link} from "react-router-dom"
import {CancelButton} from "../../buttonComponent/CancelButton.jsx"
import {useState} from "react"
import {employeeRegisterURL} from "../../URLs/EmployeeStatsURL.js"
import axios from "axios"
import {RegisterForm} from "./component/RegisterForm.jsx";
import {DefaultMask} from "../login/component/DefaultMask.jsx";

export function Register() {

    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    function handleUsernameChange(event) {
        setUser({...user, username: event.target.value})
    }

    function handlePasswordChange(event) {
        setUser({...user, password: event.target.value})
    }

    function handleRegister() {
        const user1 = {
            username: user.username,
            password: user.password,
            authorities: ["USER"]
        }

        axios.post(employeeRegisterURL, user1, {
            headers: {'Content-Type': 'application/json'}
        })
    }

    return (
        <DefaultMask>
            <h2 className="text-center m-4">Register</h2>
            <RegisterForm
                user={user}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}/>
            <Link
                type="submit"
                to={"/login"}
                className="btn btn-outline-success mx-2"
                onClick={handleRegister}>
                Register
            </Link>
            <CancelButton/>
        </DefaultMask>
    )
}