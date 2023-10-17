import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {employeeURL} from "../../../URLs/employeeURL.js";

export function useEditInputField(id) {
    let navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        entryDate: "",
    });

    useEffect(() => {
        if (id !== undefined) {
            loadEmployee();
        }
    }, [id]);

    const loadEmployee = async () => {
        const result = await axios.get(`${employeeURL}/${id}`);
        setEmployee(result.data);
    };
    const onInputChange = (event) => {
        setEmployee({...employee, [event.target.name]: event.target.value});
    };
    const onUpdate = async (event) => {
        event.preventDefault();
        await axios.put(`${employeeURL}/${id}`, employee);
        navigate("/");
    };
    const onCreate = async (event) => {
        event.preventDefault();
        await axios.post(employeeURL, employee);
        navigate("/");
    };

    const onSubmit = id === undefined ? onCreate : onUpdate

    return (
        {onInputChange, onSubmit, employee}
    );
}