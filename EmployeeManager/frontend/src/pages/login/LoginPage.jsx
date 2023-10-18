import {CancelButton} from "../../buttonComponent/CancelButton.jsx";

export function LoginPage() {






    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
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
                            />
                        </div>
                    </form>
                        <button type="submit" className="btn btn-outline-success mx-2">Login</button>
                        <button type="submit" className="btn btn-outline-primary mx-2">Register</button>
                    <CancelButton/>
                </div>
            </div>
        </div>
    )
}