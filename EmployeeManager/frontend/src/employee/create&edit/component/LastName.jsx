export function LastName({lastName, onInputChange}) {
    return (<div className="mb-3">
            <label className="form-label text-dark">
                Last-Name
            </label>
            <input
                type={"text"}
                className="form-control"
                placeholder="Last-Name"
                name="lastName"
                value={lastName ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}