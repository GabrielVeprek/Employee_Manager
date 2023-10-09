import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {sliceID} from "../../logic/ids.js";
import {HomeButton} from "../../employee/buttonComponent/HomeButton.jsx";
import {Create_EditMask} from "../../employee/create&edit/component/mask/Create_EditMask.jsx";
import {JuniorEmployee} from "./component/JuniorEmployee.jsx";

export default function Statistic() {
    const URL = "http://localhost:8080/employeeStatistics";

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
        const result = await axios.get(URL);
        const data = {
            ...result.data,
            slicedJuniorID: sliceID(result.data.junior.id),
            slicedSeniorID: sliceID(result.data.senior.id)
        }
        setStatistic(data);
    };


    return (
        <Create_EditMask>
            <h2 className="text-center m-4 text-primary">Employee Statistics</h2>
            <div className="card">
                <div className="card-header">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Junior Employee : </b>
                            <Link to={`/viewEmployee/${statistic.junior.id}`}>
                                {"ID  " +
                                    statistic.slicedJuniorID}
                            </Link>
                            {", " +
                                statistic.junior.firstName +
                                " " +
                                statistic.junior.lastName}
                        </li>
                        <li className="list-group-item">
                            <b>Senior Employee : </b>
                            <Link to={`/viewEmployee/${statistic.senior.id}`}>
                                {"ID  " +
                                    statistic.slicedSeniorID}
                            </Link>
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
            <HomeButton/>
        </Create_EditMask>
    );
}
