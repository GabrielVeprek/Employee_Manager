export function FormLogin({user, handleUsernameChange, handlePasswordChange, wrongLogIn}) {
    return (
        <>
            <h2 className={wrongLogIn ? "text-center m-3" : "text-center m-4"}>
                {wrongLogIn ? "Invalid username or password" : "Login"}</h2>
            <form>
                <div className="mb-3">
                    <label
                        htmlFor="FirstName"
                        className={wrongLogIn ? "form-label text-danger" : "form-label"}>
                        Username
                    </label>
                    <input
                        type={"text"}
                        className={wrongLogIn ? "form-control border-danger" : "form-control "}
                        placeholder="User-Name"
                        name="username"
                        value={user.username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="FirstName"
                        className={wrongLogIn ? "form-label text-danger" : "form-label"}>
                        Password
                    </label>
                    <input
                        type={"password"}
                        className={wrongLogIn ? "form-control border-danger" : "form-control"}
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