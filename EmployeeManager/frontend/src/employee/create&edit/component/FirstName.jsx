export function FirstName({firstName, onInputChange}) {
    return (
        <div className="mb-3">
            <label className="form-label text-dark">
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

