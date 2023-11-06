export function Mail ({mail, onInputChange}) {
    return(
        <div className="mb-3">
            <label className="form-label text-dark">
                E-Mail
            </label>
            <input
                type={"email"}
                className="form-control"
                placeholder="E-Mail"
                name="mail"
                value={mail ?? ""}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    )
}