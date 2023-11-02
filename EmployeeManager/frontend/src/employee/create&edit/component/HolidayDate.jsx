export function HolidayDate({date, onInputChange}) {
    return (
        <div className="mb-3">
            <label htmlFor="EntryDate" className="form-label text-dark">
                Holiday Date
            </label>
            <input
                type={"date"}
                className="form-control"
                name="holiday.nextHoliday"
                value={date ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}