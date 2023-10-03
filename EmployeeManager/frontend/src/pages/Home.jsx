import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:8080/employee");
    setEmployee(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First-Name</th>
              <th scope="col">Last-Name</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.mail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
