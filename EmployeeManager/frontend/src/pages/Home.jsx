import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
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

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead>
            <tr className="font-weight-bold fs-5">
            <th scope="col" className="text-primary">ID</th>
              <th scope="col">First-Name</th>
              <th scope="col">Last-Name</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          <tbody className="font-weight-light fs-5">
            {employee.map((employee) => (
              <tr>
                <td className="text-primary">{employee.id}</td>

                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.mail}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2 shadow"
                    to={`/viewEmployee/${employee.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2 shadow"
                    to={`/editEmployee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2 shadow"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
