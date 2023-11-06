export function CreateDataMask({htmlText, type, placeHolder, inputName, entryDate, onInputChange}) {
    return (
        <div className="mb-3">
            <label className="form-label text-dark">
                {htmlText}
            </label>
            <input
                type={type}
                className="form-control"
                placeholder={placeHolder}
                name={inputName}
                value={entryDate ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}