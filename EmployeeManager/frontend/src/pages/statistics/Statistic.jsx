import {useEffect, useState} from "react";
import axios from "axios";
import {sliceID} from "../../logic/ids.js";
import {HomeButton} from "../../buttonComponent/HomeButton.jsx";
import {CreateEditMask} from "../../employee/create&edit/Create&EditMask.jsx";
import {employeeStatisticsURL} from "../../URLs/employeeStatisticsURL.js";
import {JuniorEmployee} from "./component/JuniorEmployee.jsx";
import {SeniorEmployee} from "./component/SeniorEmployee.jsx";
import {Avergae} from "./component/Avergae.jsx";


export default function Statistic() {

//splitt the statistic
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

    const loadStatistics = async () => {
        const result = await axios.get(employeeStatisticsURL);
        const data = {
            ...result.data,
            slicedJuniorID: sliceID(result.data.junior.id),
            slicedSeniorID: sliceID(result.data.senior.id),
            average: sliceID(result.data.average.toString())
        }
        setStatistic(data);
    };
    return (
        <CreateEditMask>
            <h2 className="text-center m-4 text-primary">Employee Statistics</h2>
            <div className="card">
                <div className="card-header">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <JuniorEmployee id={statistic.junior.id} slicedID={statistic.slicedJuniorID}
                                            firstName={statistic.junior.firstName}
                                            lastName={statistic.junior.lastName}/>
                        </li>
                        <li className="list-group-item">
                            <SeniorEmployee id={statistic.senior.id} slicedID={statistic.slicedSeniorID}
                                            firstName={statistic.senior.firstName}
                                            lastName={statistic.senior.lastName}/>
                        </li>
                        <li className="list-group-item">
                            <Avergae average={statistic.average}/>
                        </li>
                    </ul>
                </div>
            </div>
            <HomeButton/>
        </CreateEditMask>
    );
}
