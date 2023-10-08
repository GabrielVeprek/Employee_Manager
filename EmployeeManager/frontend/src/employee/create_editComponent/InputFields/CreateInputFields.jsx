import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {InputField} from "./InputField.jsx";

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
        await axios.post(`http://localhost:8080/employee`, employee);
        navigate("/");
    };

    return (
        <InputField employee={employee} onInputChange={onInputChange} onSubmit={onSubmit}/>
    );
}