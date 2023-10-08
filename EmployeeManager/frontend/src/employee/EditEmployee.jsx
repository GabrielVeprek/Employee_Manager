import axios from "axios";
import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {CancelButton} from "./components/CancelButton.jsx";

export default function EditEmployee() {
    let navigate = useNavigate();
    const {id} = useParams();

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
        await axios.put(`http://localhost:8080/employee/${id}`, employee);
        navigate("/");
    };


    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/employee/${id}`);
        setEmployee(result.data);
    };

    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Employee</h2>
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

                        <CancelButton/>
                    </form>
                </div>
            </div>
        </div>
    );
}
