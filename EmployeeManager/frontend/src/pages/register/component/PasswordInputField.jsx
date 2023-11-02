export function PasswordInputField({user, handlePasswordChange}) {
    return (
        <div className="mb-3">
            <label
                htmlFor="password"
                className="form-label">
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
    )
}