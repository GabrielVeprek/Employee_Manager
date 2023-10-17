import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {HomeButton} from "../../buttonComponent/HomeButton.jsx";
import {CreateEditMask} from "../create&edit/Create&EditMask.jsx";
import {BodyList} from "./component/BodyList.jsx";
import {employeeURL} from "../../URLs/employeeURL.js";

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
        const result = await axios.get(`${employeeURL}/${id}`);
        setEmployee(result.data);
    };

    return (
        <CreateEditMask>
            <h2 className="text-center m-4">Employee Details</h2>
            <div className="card">
                <div className="card-header">
                    Employee - {employee.id}
                    <BodyList employee={employee}/>
                </div>
            </div>
            <HomeButton/>
        </CreateEditMask>
    );
}
