import {useEffect, useState} from "react";
import {sliceID} from "../../utils/ids.js";
import {HomeButton} from "../../buttonComponent/HomeButton.jsx";
import {CreateEditMask} from "../../employee/create&edit/Create&EditMask.jsx";
import {employeeStatisticsURL} from "../../URLs/employeeStatisticsURL.js";
import {JuniorEmployee} from "./component/JuniorEmployee.jsx";
import {SeniorEmployee} from "./component/SeniorEmployee.jsx";
import {Avergae} from "./component/Avergae.jsx";
import {getAuthenticatedResult} from "../../utils/getToken.js";
import {error401Handler} from "../../utils/error401Handler.js";

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


    const fullContent = <CreateEditMask>
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
    </CreateEditMask>;

    return (
        <>
            {error401Handler() ? (
                <div className="position-absolute top-50 start-50 translate-middle">
                    <img className="img-fluid mb-2" src="../src/images/error_401.jpg"/>
                </div>
            ) : (fullContent)}
        </>
    )

}
