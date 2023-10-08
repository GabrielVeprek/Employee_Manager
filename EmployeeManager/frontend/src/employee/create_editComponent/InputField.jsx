import {SubmitButton} from "../buttonComponent/SubmitButton.jsx";
import {CancelButton} from "../buttonComponent/CancelButton.jsx";

export function InputField({firstName,lastName,mail,entryDate,onInputChange,onSubmit}) {
    return (
        <div className="mb-3">
            <label htmlFor="FirstName" className="form-label">
                First-Name
            </label>
            <input
                type={"text"}
                className="form-control"
                placeholder="First-Name"
                name="firstName"
                value={firstName}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    <div className="mb-3">
        <label htmlFor="LastName" className="form-label">
            Last-Name
        </label>
        <input
            type={"text"}
            className="form-control"
            placeholder="Last-Name"
            name="lastName"
            value={lastName}
            onChange={(event) => onInputChange(event)}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="E-Mail" className="form-label">
            E-Mail
        </label>
        <input
            type={"text"}
            className="form-control"
            placeholder="E-Mail"
            name="mail"
            value={mail}
            onChange={(event) => onInputChange(event)}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="EntryDate" className="form-label">
            Entry Date
        </label>
        <input
            type={"date"}
            className="form-control"
            name="entryDate"
            value={entryDate}
            onChange={(event) => onInputChange(event)}
        />
    </div>
    <SubmitButton/>
    <CancelButton/>
)
}