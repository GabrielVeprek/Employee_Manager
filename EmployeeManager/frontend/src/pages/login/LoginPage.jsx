import {Buffer} from "buffer";
import {useState} from "react";
import {Link} from "react-router-dom";
import {CancelButton} from "../../buttonComponent/CancelButton.jsx";

export function LoginPage({setIsLoggedIn}) {
    const BACKEND_LOGIN = 'http://localhost:8080/login';
    const [wrongLogIn, setWrongLogIn] = useState(false);

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    function handleUsernameChange(event) {
        setUser({...user, username: event.target.value});
    }

    function handlePasswordChange(event) {
        setUser({...user, password: event.target.value});
    }

    function handleLogin() {
        const headers = new Headers();
        const auth = Buffer.from(user.username + ':' + user.password).toString('base64');
        headers.set('Authorization', 'Basic ' + auth);

        fetch(BACKEND_LOGIN, {method: 'GET', headers: headers})
            .then(response => {
                if (response.status !== 401) {
                    setIsLoggedIn(true);
                    history.go(-3)
                } else {
                    setWrongLogIn(true);
                    throw new Error("message");
                }
                return response.text();
            })
            .catch(error => {
                console.log("ERROR MESSAGE: " + error);
            });
    }

    const errorLoginForm =
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-3 text">Invalid username or password</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="FirstName" className="form-label text-danger">
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-control border-danger"
                                placeholder="User-Name"
                                name="username"
                                value={user.username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="FirstName" className="form-label text-danger">
                                Password
                            </label>
                            <input
                                type={"password"}
                                className="form-control border-danger"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </form>
                    <Link
                        type="submit"
                        className="btn btn-outline-success mx-2"
                        onClick={handleLogin}
                        to={"/login"}
                    >
                        Login
                    </Link>
                    <Link to="/register" className="btn btn-outline-primary mx-2">
                        Register
                    </Link>
                    <CancelButton/>
                </div>
            </div>
        </div>





    const loginForm =
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="FirstName" className="form-label">
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-control "
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
                    <Link
                        type="submit"
                        className="btn btn-outline-success mx-2"
                        onClick={handleLogin}
                        to={"/login"}
                    >
                        Login
                    </Link>
                    <Link to="/register" className="btn btn-outline-primary mx-2">
                        Register
                    </Link>
                    <CancelButton/>
                </div>
            </div>
        </div>

    return (wrongLogIn ? errorLoginForm : loginForm)
}




