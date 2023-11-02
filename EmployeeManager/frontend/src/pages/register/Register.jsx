import {Link} from "react-router-dom"
import {CancelButton} from "../../buttonComponent/CancelButton.jsx"
import {useState} from "react"
import {employeeRegisterURL} from "../../URLs/EmployeeStatsURL.js"
import axios from "axios"

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
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register</h2>
                    <form>
                        <div className="mb-3">
                            <label
                                htmlFor="FirstName"
                                className="form-label">
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="User-Name"
                                name="username"
                                value={user.username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="FirstName" className="form-label">
                                Password
                            </label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </form>
                    <Link type="submit" to={"/login"} className="btn btn-outline-success mx-2" onClick={handleRegister}>Register
                    </Link>
                    <CancelButton/>
                </div>
            </div>
        </div>
    )
}