export function Salary ({salary, onInputChange}) {
    return (
        <div className="mb-3">
            <label htmlFor="EntryDate" className="form-label text-dark">
                Salary
            </label>
            <input
                type={"text"}
                className="form-control"
                name="salary"
                value={salary ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )

}