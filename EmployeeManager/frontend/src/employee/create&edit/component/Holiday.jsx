export function Holiday({amount, onInputChange}) {
    return (
        <div className="mb-3">
            <label className="form-label text-dark">
                Holidays left
            </label>
            <input
                type={"number"}
                className="form-control"
                name="holiday.holidayAmount"
                value={amount ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}