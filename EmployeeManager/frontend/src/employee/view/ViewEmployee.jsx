import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {HomeButton} from "../../buttonComponent/HomeButton.jsx";
import {DefaultMask} from "../../pages/login/component/DefaultMask.jsx";
import {BodyList} from "./component/BodyList.jsx";
import {employeeURL} from "../../URLs/employeeURL.js";
import {getAuthenticatedResult} from "../../utils/getToken.js";

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
        const result = await getAuthenticatedResult(`${employeeURL}/${id}`);
        setEmployee(result.data);
    };

    return (
        <DefaultMask>
            <h2 className="text-center m-4">Employee Details</h2>
            <div className="card">
                <div className="card-header">
                    Employee - {employee.id}
                    <BodyList employee={employee}/>
                </div>
            </div>
            <HomeButton/>
        </DefaultMask>
    );
}
