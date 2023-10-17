export function FirstName({firstName, onInputChange}) {
    return (  <div className="mb-3">
            <label htmlFor="FirstName" className="form-label">
                First-Name
            </label>
            <input
                type={"text"}
                className="form-control"
                placeholder="First-Name"
                name="firstName"
                value={firstName ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}

