import { CancelButton } from "../../buttonComponent/CancelButton.jsx";
import { Buffer } from "buffer";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
    const BACKEND_LOGIN = 'http://localhost:8080/login';
    const [isConfirmed, setConfirmed] = useState(false);

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    function handleUsernameChange(event) {
        setUser({ ...user, username: event.target.value });
    }

    function handlePasswordChange(event) {
        setUser({ ...user, password: event.target.value });
    }

    function handleLogin() {
        const headers = new Headers();
        const auth = Buffer.from(user.username + ':' + user.password).toString('base64');
        headers.set('Authorization', 'Basic ' + auth);
        return fetch(BACKEND_LOGIN, { method: 'GET', headers: headers })
            .then(response => response.text())
            .then(jwt => {
                localStorage.setItem('jwt', jwt);
                setConfirmed(true);
            })
            .catch((error) => console.log("ERROR MESSAGE: " + error));
    }
    const fullContent = (
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
                    <button type="submit" className="btn btn-outline-success mx-2" onClick={handleLogin}>
                        Login
                    </button>
                    <Link type="submit" to={"/register"} className="btn btn-outline-primary mx-2">
                        Register
                    </Link>
                    <CancelButton />
                </div>
            </div>
        </div>
    );

    return (
        <>
            {isConfirmed ? (
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h4>Successfully Logged-in</h4>
                            <Link type="submit" className="btn btn-outline-primary mx-2" to={"/"} onClick={handleLogin}>Home</Link>
                        </div>
                    </div>
                </div>
            ) : (
                fullContent
            )}
        </>
    );
}
