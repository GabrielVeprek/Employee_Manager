export function Holiday ({amount, onInputChange}) {

    return (
        <div className="mb-3">
            <label htmlFor="EntryDate" className="form-label text-dark">
                Holidays left
            </label>
            <input
                type={"number"}
                className="form-control"
                name="holiday.amount"
                value={amount ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}