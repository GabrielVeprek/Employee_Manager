export function Overtime({overtime, onInputChange}) {
    return (
        <div className="mb-3">
            <label htmlFor="E-Mail" className="form-label text-dark">
                Overtime
            </label>
            <input
                type={"text"}
                className="form-control"
                name="overtimeHour"
                value={overtime ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}