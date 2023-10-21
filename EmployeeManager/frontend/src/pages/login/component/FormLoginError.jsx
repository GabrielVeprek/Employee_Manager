export function FormLoginError ({user, handleUsernameChange, handlePasswordChange}) {
    return (<>
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
        </>
    )
}