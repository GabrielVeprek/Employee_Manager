import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {HomeButton} from "../../buttonComponent/HomeButton.jsx";
import {DefaultMask} from "../../pages/login/component/DefaultMask.jsx";
import {EmployeePersonalInfos} from "./component/EmployeePersonalInfos.jsx";
import {employeeURL} from "../../URLs/employeeURL.js";
import {getAuthenticatedResult} from "../../utils/getToken.js";
import {EmployeeStatisticInfo} from "./component/EmployeeStatisticInfo.jsx";
import {EmployeeHolidayInfo} from "./component/EmployeeHolidayInfo.jsx";

export default function ViewEmployee() {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        entryDate: "",
        position: "",
        salary: 0,
        holiday: {amount: 0, nextHoliday: ""},
        task: "",
        overtime: 0,
    })

    const {id} = useParams();

    useEffect(() => {
        loadEmployee();
    }, [])

    const loadEmployee = async () => {
        const result = await getAuthenticatedResult(`${employeeURL}/${id}`)
        setEmployee(result.data)
        console.log(result.data)
    }

    return (
        <DefaultMask>
            <h2 className="text-center my-4">Employee Details</h2>
            <div className="card">
                <div className="card-header">
                    Employee - {employee.id}
                    <EmployeePersonalInfos employee={employee}/>
                </div>
            </div>
            <div className="card my-5">
                <div className="card-header text-primary">
                    Personal Statistics
                    <EmployeeStatisticInfo employee={employee}/>
                </div>
            </div>
            <div className="card my-3">
                <div className="card-header text-primary">
                    Holiday Infos
                    <EmployeeHolidayInfo employee={employee}/>
                </div>
            </div>
            <HomeButton/>
        </DefaultMask>
    );
}
