import axios from "axios";
import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {CancelButton} from "./buttonComponent/CancelButton.jsx";
import {SubmitButton} from "./buttonComponent/SubmitButton.jsx";
import {Create_EditMask} from "./create_editComponent/Create_EditMask.jsx";

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
        <Create_EditMask>
            <h2 className="text-center m-4">Edit Employee</h2>
            <form onSubmit={(event) => onSubmit(event)}>

            </form>
        </Create_EditMask>
    );
}
