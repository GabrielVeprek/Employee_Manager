import axios from "axios";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CancelButton} from "./buttonComponent/CancelButton.jsx";
import {SubmitButton} from "./buttonComponent/SubmitButton.jsx";
import {Create_EditMask} from "./create-editComponent/Create_EditMask.jsx";

export default function CreateEmployee() {
    let navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        entryDate: "",
    });

    const {firstName, lastName, mail, entryDate} = employee;

    const onInputChange = (event) => {
        setEmployee({...employee, [event.target.name]: event.target.value});
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/employee", employee);
        navigate("/");
    };

    return (
        <Create_EditMask>
            <h2 className="text-center m-4">Create Employee</h2>

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
            </form>
        </Create_EditMask>
    );
}
