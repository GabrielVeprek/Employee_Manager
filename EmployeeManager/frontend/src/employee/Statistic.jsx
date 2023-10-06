import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {sliceID} from "../logic/ids.js";

export default function Statistic() {


    const [statistic, setStatistic] = useState({
        junior: "",
        slicedJuniorID: "",
        senior: "",
        slicedSeniorID: "",
        average: 0,
    });

    useEffect(() => {
        loadStatistics();
    }, []);


    // stuff like URL in file
    const loadStatistics = async () => {
        const result = await axios.get("http://localhost:8080/employeeStatistics");
        const data = {
            ...result.data,
            slicedJuniorID: sliceID(result.data.junior.id),
            slicedSeniorID: sliceID(result.data.senior.id)
        }
        setStatistic(data);
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
                                    <Link to={`/viewEmployee/${statistic.junior.id}`}>
                                        {"ID  " +
                                            statistic.slicedJuniorID}      </Link>
                                    {", " +
                                        statistic.junior.firstName +
                                        " " +
                                        statistic.junior.lastName}

                                </li>
                                <li className="list-group-item">
                                    <b>Senior Employee : </b>
                                    <Link to={`/viewEmployee/${statistic.senior.id}`}>
                                        {"ID  " +
                                            statistic.slicedSeniorID
                                        } </Link>
                                    {", " +
                                        statistic.senior.firstName +
                                        " " +
                                        statistic.senior.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>Average Employee tenure : </b>
                                    {statistic.average.toString().slice(0, 3)}
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
