import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {HomeButton} from "../buttonComponent/HomeButton.jsx";
import {Create_EditMask} from "../create&edit/component/mask/Create_EditMask.jsx";
import {BodyList} from "./component/bodyList/BodyList.jsx";

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
                    <BodyList employee={employee}/>
                </div>
            </div>
            <HomeButton/>
        </Create_EditMask>
    );
}
