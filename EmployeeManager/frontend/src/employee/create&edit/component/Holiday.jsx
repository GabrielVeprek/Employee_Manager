export function Holiday ({amount, onInputChange}) {
    console.log(amount)

    return (
        <div className="mb-3">
            <label htmlFor="EntryDate" className="form-label text-dark">
                Holidays left
            </label>
            <input
                type={"text"}
                className="form-control"
                name="holiday"
                value={amount ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )

}