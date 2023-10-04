import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Statistic() {
  const [statistic, setStatistic] = useState({
    junior: "",
    senior: "",
    average: 0,
  });

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {
    const result = await axios.get("http://localhost:8080/employeeStatistics");
    setStatistic(result.data);
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 text-primary">Employee Statistics</h2>
          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Junior Employee : </b>
                  {"ID  " +
                    statistic.junior.id +
                    ", " +
                    statistic.junior.firstName +
                    " " +
                    statistic.junior.lastName}
                </li>
                <li className="list-group-item">
                  <b>Senior Employee : </b>
                  {"ID  " +
                    statistic.senior.id +
                    ", " +
                    statistic.senior.firstName +
                    " " +
                    statistic.senior.lastName}
                </li>
                <li className="list-group-item">
                  <b>Average Employee tenure : </b>
                  {statistic.average}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-outline-primary my-3 shadow" to="/">
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
