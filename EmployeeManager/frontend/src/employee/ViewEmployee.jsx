import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {HomeButton} from "./buttonComponent/HomeButton.jsx";
import {Create_EditMask} from "./create_editComponent/mask/Create_EditMask.jsx";

export default function ViewEmployee() {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        entryDate: "",
    });

    const {id} = useParams();

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/employee/${id}`);
        setEmployee(result.data);
    };

    return (
        <Create_EditMask>
            <h2 className="text-center m-4">Employee Details</h2>
            <div className="card">
                <div className="card-header">
                    Employee - {employee.id}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>First Name : </b>
                            {employee.firstName}
                        </li>
                        <li className="list-group-item">
                            <b>Last Name : </b>
                            {employee.lastName}
                        </li>
                        <li className="list-group-item">
                            <b>E-Mail : </b>
                            {employee.mail}
                        </li>
                        <li className="list-group-item">
                            <b>Entry Date : </b>
                            {employee.entryDate}
                        </li>
                    </ul>
                </div>
            </div>
            <HomeButton/>
        </Create_EditMask>
    );
}
