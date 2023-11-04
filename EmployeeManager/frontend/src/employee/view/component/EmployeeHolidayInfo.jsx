import {HolidayAmount} from "./HolidayAmount.jsx" 
import {HolidayNext} from "./HolidayNext.jsx" 
import {Overtime} from "./Overtime.jsx" 
import {CardContainer} from "./CardContainer.jsx" 

export function EmployeeHolidayInfo({employee}) {
    return (
        <CardContainer>
            Holiday Infos
            <ul className="list-group list-group-flush">
                <HolidayAmount amount={employee.holiday.holidayAmount}/>
                <HolidayNext date={employee.holiday.nextHoliday}/>
                <Overtime hours={employee.overtimeHour}/>
            </ul>
        </CardContainer>
    )
}