import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {HomeButton} from "../../buttonComponent/HomeButton.jsx";
import {DefaultMask} from "../../pages/login/component/DefaultMask.jsx";
import {EmployeePersonalInfos} from "./component/EmployeePersonalInfos.jsx";
import {getAuthenticatedResult} from "../../utils/getToken.js";
import {EmployeeStatisticInfo} from "./component/EmployeeStatisticInfo.jsx";
import {EmployeeHolidayInfo} from "./component/EmployeeHolidayInfo.jsx";
import {employeeURL} from "../../URLs/EmployeeURLs.js";


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
    }

    return (
        <DefaultMask>
            <h2 className="text-center my-2">Employee Details</h2>
            <EmployeePersonalInfos employee={employee}/>
            <EmployeeStatisticInfo employee={employee}/>
            <EmployeeHolidayInfo employee={employee}/>
            <HomeButton/>
        </DefaultMask>
    );
}
