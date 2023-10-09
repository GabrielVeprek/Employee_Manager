import {SubmitButton} from "../../../buttonComponent/SubmitButton.jsx";
import {CancelButton} from "../../../buttonComponent/CancelButton.jsx";
export function InputField({employee, onInputChange,onSubmit}) {

    return (
        (
            <form onSubmit={(event) => onSubmit(event)}>
                <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">
                        First-Name
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="First-Name"
                        name="firstName"
                        value={employee.firstName}
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
                        value={employee.lastName}
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
                        value={employee.mail}
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
                        value={employee.entryDate}
                        onChange={(event) => onInputChange(event)}
                    />
                </div>
                <SubmitButton/>
                <CancelButton/>
            </form>
        )
    )
}