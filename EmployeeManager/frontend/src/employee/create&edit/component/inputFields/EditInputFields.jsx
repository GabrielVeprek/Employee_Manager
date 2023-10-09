import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {InputField} from "./InputField.jsx";

export function EditInputFields() {
    let navigate = useNavigate();
    const {id} = useParams();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        entryDate: "",
    });


    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/employee/${id}`);
        setEmployee(result.data);
    };
    const onInputChange = (event) => {
        setEmployee({...employee, [event.target.name]: event.target.value});
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:8080/employee/${id}`, employee);
        navigate("/");
    };


    return (
        <InputField employee={employee} onInputChange={onInputChange} onSubmit={onSubmit}/>
    );
}