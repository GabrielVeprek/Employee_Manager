import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ButtonView} from "./ButtonView.jsx";
import {ButtonEdit} from "./ButtonEdit.jsx";
import {TableBodyDate} from "./TableBodyDate.jsx";
import {appContext} from "../../../App.jsx";
import {ButtonDelete} from "./ButtonDelete.jsx";
import {employeeURL} from "../../../URLs/EmployeeStatsURL.js";



export function TableBody({isLoggedIn}) {

    const [employee, setEmployee] = useState([])
    const [{searchResult}] = useContext(appContext)
    const display = searchResult.length === 0 ? employee : searchResult

    useEffect(() => {
        loadEmployee()
    }, [])

    const loadEmployee = async () => {
        const result = await axios.get(employeeURL)
        setEmployee(result.data)
    }

    return (
        <tbody className="font-weight-light fs-5">
        {display.map((employee) => {
            return (
                <tr key={employee.id}>
                    <TableBodyDate employee={employee}/>
                    {isLoggedIn ?
                        <td>
                            <ButtonView employeeID={employee.id}/>
                            <ButtonEdit employeeID={employee.id}/>
                            <ButtonDelete employeeID={employee.id}/>
                        </td> : ""}
                </tr>
            )
        })}
        </tbody>
    )
}
