import {CardContainer} from "./CardContainer.jsx"
import {DataMask} from "./DataMask.jsx";

export function EmployeeHolidayInfo({employee}) {
    return (
        <CardContainer>
            Holiday Infos
            <ul className="list-group list-group-flush">
                <DataMask text={"Holidays left"} data={employee.holiday.holidayAmount}/>
                <DataMask text={"Next Holiday"} data={employee.holiday.nextHoliday}/>
                <DataMask text={"Overtime Hours"} data={employee.overtimeHour}/>
            </ul>
        </CardContainer>
    )
}