export function EntryDate({entryDate, onInputChange}) {
    return (
        <div className="mb-3">
            <label className="form-label text-dark">
                Entry Date
            </label>
            <input
                type={"date"}
                className="form-control"
                name="entryDate"
                value={entryDate ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}