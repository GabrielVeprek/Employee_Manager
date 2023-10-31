export function Task({task, onInputChange}) {
    return (
        <div className="mb-3">
            <label htmlFor="EntryDate" className="form-label text-dark">
                Task
            </label>
            <input
                type={"text"}
                className="form-control"
                name="task"
                value={task ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )

}