export function FormLogin({user, handleUsernameChange, handlePasswordChange}) {
    return (
        <>
            <h2 className="text-center m-4">Login</h2>
            <form>
                <div className="mb-3">
                    <label
                        htmlFor="FirstName"
                        className="form-label">
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
        </>
    )
}