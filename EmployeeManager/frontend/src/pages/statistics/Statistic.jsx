import {useEffect, useState} from "react"
import {sliceID} from "../../utils/ids.js"
import {HomeButton} from "../../buttonComponent/HomeButton.jsx"
import {DefaultMask} from "../login/component/DefaultMask.jsx"
import {employeeStatsURL} from "../../URLs/EmployeeStatsURL.js"
import {JuniorEmployee} from "./component/JuniorEmployee.jsx"
import {SeniorEmployee} from "./component/SeniorEmployee.jsx"
import {Average} from "./component/Average.jsx"
import {getAuthenticatedResult} from "../../utils/getToken.js"
export default function Statistic() {

    const [statistic, setStatistic] = useState({
        junior: "",
        slicedJuniorID: "",
        senior: "",
        slicedSeniorID: "",
        average: 0,
    })

    useEffect(() => {
        loadStatistics()
    }, [])

    const loadStatistics = async () => {
        const result = await getAuthenticatedResult(employeeStatsURL)
        const data = {
            ...result.data,
            slicedJuniorID: sliceID(result.data.junior.id),
            slicedSeniorID: sliceID(result.data.senior.id),
            average: sliceID(result.data.average.toString())
        }
        setStatistic(data)
    }

    return (
        <DefaultMask>
            <h2 className="text-center m-4 text-primary">Employee Statistics</h2>
            <div className="card">
                <div className="card-header">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <JuniorEmployee junior={statistic.junior} slicedID={statistic.slicedJuniorID}/>
                        </li>
                        <li className="list-group-item">
                            <SeniorEmployee senior={statistic.senior} slicedID={statistic.slicedSeniorID}/>
                        </li>
                        <li className="list-group-item">
                            <Average average={statistic.average}/>
                        </li>
                    </ul>
                </div>
            </div>
            <HomeButton/>
        </DefaultMask>
    )
}
