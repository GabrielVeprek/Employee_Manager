import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function TableBody() {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8080/employee");
        setEmployee(result.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:8080/employee/${id}`);
        loadEmployee();
    };

    return (<tbody className="font-weight-light fs-5">
    {employee.map((employee) => (
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
                <button
                    className="btn btn-danger mx-2 shadow"
                    onClick={() => deleteEmployee(employee.id)}>
                    Delete
                </button>
            </td>
        </tr>
    ))}
    </tbody>)
}