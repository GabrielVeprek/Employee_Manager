import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {employeeURL} from "../../../URLs/employeeURL.js";
import {ViewButton} from "./ViewButton.jsx";
import {EditButton} from "./EditButton.jsx";
import {TableBodyDate} from "./TableBodyDate.jsx";
import {appContext} from "../../../App.jsx";
import {DeleteButton} from "./DeleteButton.jsx";


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
                            <ViewButton employee={employee}/>
                            <EditButton employee={employee}/>
                            <DeleteButton id={employee.id}/>
                        </td> : ""}
                </tr>
            )
        })}
        </tbody>
    )
}
