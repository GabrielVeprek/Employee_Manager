import {useEffect, useState} from "react";
import {sliceID} from "../../utils/ids.js";
import {HomeButton} from "../../buttonComponent/HomeButton.jsx";
import {DefaultMask} from "../login/component/DefaultMask.jsx";
import {employeeStatisticsURL} from "../../URLs/employeeStatisticsURL.js";
import {JuniorEmployee} from "./component/JuniorEmployee.jsx";
import {SeniorEmployee} from "./component/SeniorEmployee.jsx";
import {Avergae} from "./component/Avergae.jsx";
import {getAuthenticatedResult} from "../../utils/getToken.js";


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


    const loadStatistics = async () => {
        const result = await getAuthenticatedResult(employeeStatisticsURL);
        const data = {
            ...result.data,
            slicedJuniorID: sliceID(result.data.junior.id),
            slicedSeniorID: sliceID(result.data.senior.id),
            average: sliceID(result.data.average.toString())
        }
        setStatistic(data);
    }

    return (
        <DefaultMask>
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
        </DefaultMask>
    )
}
