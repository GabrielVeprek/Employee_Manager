export function Overtime({overtime, onInputChange}) {
    return (
        <div className="mb-3">
            <label htmlFor="E-Mail" className="form-label text-dark">
                Overtime
            </label>
            <input
                type={"number"}
                className="form-control"
                name="overtimeHour"
                value={overtime ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}