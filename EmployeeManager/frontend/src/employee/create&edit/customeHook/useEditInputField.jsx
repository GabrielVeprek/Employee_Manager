import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {employeeURL} from "../../../URLs/employeeURL.js";
import {getAuthenticatedResult, postAuthenticatedResult, putAuthenticatedResult} from "../../../utils/getToken.js";

export function useEditInputField(id) {
    let navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        entryDate: "",
        position: "",
        salary: 0,
        holidays : { amount :"", nextHoliday: ""},
    });

    useEffect(() => {
        if (id !== undefined) {
            loadEmployee();
        }
    }, [id]);

    const loadEmployee = async () => {
        const result = await getAuthenticatedResult(`${employeeURL}/${id}`);
        setEmployee(result.data);
    };
    const onInputChange = (event) => {
        setEmployee({...employee, [event.target.name]: event.target.value});
    };
    const onUpdate = async (event) => {
        event.preventDefault();
        await putAuthenticatedResult(`${employeeURL}/${id}`,employee,)
        navigate("/");
    };
    const onCreate = async (event) => {
        event.preventDefault();
        await postAuthenticatedResult(employeeURL,employee)
        navigate("/");
    };

    const onSubmit = id === undefined ? onCreate : onUpdate

    return (
        {onInputChange, onSubmit, employee}
    );
}