export function UsernameInputField({user, handleUsernameChange}) {
    return (
        <div className="mb-3">
            <label
                htmlFor="username"
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
    )
}