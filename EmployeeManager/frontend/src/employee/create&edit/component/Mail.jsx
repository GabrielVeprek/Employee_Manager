export function Mail ({mail, onInputChange}) {
    return(
        <div className="mb-3">
            <label htmlFor="E-Mail" className="form-label">
                E-Mail
            </label>
            <input
                type={"text"}
                className="form-control"
                placeholder="E-Mail"
                name="mail"
                value={mail ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}