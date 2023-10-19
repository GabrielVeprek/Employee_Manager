import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {employeeURL} from "../../../URLs/employeeURL.js";
import {sliceID} from "../../../utils/ids.js"
import {createHeader, getToken} from "../../../utils/getToken.js";


export function TableBody() {
    const [employee, setEmployee] = useState([]);
    const [isConfirmed, setConfirmed] = useState(false);
    const [employeeToDelete, setEmployeeToDelete] = useState(null);

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get(employeeURL);
        setEmployee(result.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`${employeeURL}/${id}`);
        loadEmployee();
        setEmployeeToDelete();
        setConfirmed(false);
    };

    function handleDelete(employeeId) {
        isConfirmed ?
            deleteEmployee(employeeId)
            :
            setEmployeeToDelete(employeeId);
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
                const header = createHeader(token);
                return (
                    <tr key={employee.id}>
                        <td className="text-primary">{employee.id.slice(0, 4)}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.mail}</td>
                        <td>
                            <Link
                                className="btn btn-primary mx-2 shadow"
                                to={`/viewEmployee/${employee.id}`}>
                                View
                            </Link>
                            <Link
                                className="btn btn-outline-primary mx-2 shadow"
                                to={`/editEmployee/${employee.id}`}>
                                Edit
                            </Link>
                            {header?
                                <button
                                className="btn btn-danger mx-2 shadow"
                                onClick={() => handleDelete(employee.id)}>Delete
                            </button>:""}

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
                        <div className="col-md-7 offset-md-2 border rounded p-4 mt-2 shadow">
                            <h4>Confirm Delete of {employee.map((employee) =>
                                employee.firstName + " " + employee.lastName + ", ID: " + sliceID(employee.id))}</h4>
                            <button
                                className="btn btn-danger mx-2"
                                onClick={() => handleDelete(employeeToDelete)}>Confirm Delete
                            </button>
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
