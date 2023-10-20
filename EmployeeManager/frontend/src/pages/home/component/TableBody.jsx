import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {employeeURL} from "../../../URLs/employeeURL.js";
import {createHeader, deleteAuthenticatedResult, getToken} from "../../../utils/getToken.js";
import {ConfirmCancelButton} from "../../../buttonComponent/ConfirmCancelButton.jsx";
import {ViewButton} from "./ViewButton.jsx";
import {EditButton} from "./EditButton.jsx";
import {TableBodyDate} from "./TableBodyDate.jsx";


export function TableBody() {
    const [employee, setEmployee] = useState([]);
    const [isConfirmed, setConfirmed] = useState(false);
    const [employeeToDelete, setEmployeeToDelete] = useState("");

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get(employeeURL);
        setEmployee(result.data);
    };

    const deleteEmployee = async () => {
        await deleteAuthenticatedResult(`${employeeURL}/${employeeToDelete}`)
        await loadEmployee();
        setEmployeeToDelete();
        setConfirmed(false);
    };

    function handleDelete(employeeId) {
        console.log(employeeId + " : employeeID")
        setEmployeeToDelete(employeeId)
        console.log(employeeId)
        setConfirmed(true);
    }

    function handleCancel() {
        setConfirmed(false)
    }

    const fullContent =
        <>
            <tbody className="font-weight-light fs-5">
            {employee.map((employee) => {
                const token = getToken();
                const jwt = createHeader(token);
                return (
                    <tr key={employee.id}>
                        <TableBodyDate employee={employee}/>
                        <td>
                            <ViewButton employee={employee}/>
                            <EditButton employee={employee}/>
                            {jwt ?
                                <button
                                    className="btn btn-danger mx-2 shadow"
                                    onClick={() => handleDelete(employee.id)}>Delete
                                </button> : ""}
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </>;

    return (
        <>
            {isConfirmed ? (
                <div className="container offset-md-4">
                    <div className="row text-center">
                        <div className="col-md-7 offset-md-1 border rounded p-4 mt-2 shadow">
                            <h4>Confirm Delete of {"Employee with ID : " + employeeToDelete}</h4>
                            <ConfirmCancelButton deleteEmployee={deleteEmployee()}/>
                            <Link className="btn btn-secondary" to={"/"} onClick={handleCancel}>Cancel</Link>
                        </div>
                    </div>
                </div>
            ) : (
                fullContent
            )}
        </>
    )
}
