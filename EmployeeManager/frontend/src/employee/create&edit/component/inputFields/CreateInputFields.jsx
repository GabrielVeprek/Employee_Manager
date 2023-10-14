import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {InputField} from "./InputField.jsx";
import {employeeURL} from "../../../../pages/URLs/employeeURL.js";

export function CreateInputFields() {
    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        entryDate: "",
    });

    const onInputChange = (event) => {
        setEmployee({...employee, [event.target.name]: event.target.value});
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(employeeURL, employee);
        navigate("/");
    };

    return (
        <InputField employee={employee} onInputChange={onInputChange} onSubmit={onSubmit}/>
    );
}