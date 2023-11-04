export function Position ({position, onInputChange}) {
    return (
        <div className="mb-3">
            <label htmlFor="EntryDate" className="form-label text-dark">
                Position
            </label>
            <input
                type={"text"}
                className="form-control"
                placeholder="Position"
                name="position"
                value={position ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )

}