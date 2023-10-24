import {HolidayAmount} from "./HolidayAmount.jsx";
import {HolidayNext} from "./HolidayNext.jsx";
import {Overtime} from "./Overtime.jsx";

export function EmployeeHolidayInfo({employee}) {
    return (
        <ul className="list-group list-group-flush">
            <HolidayAmount amount={employee.holiday.amount}/>
            <HolidayNext date={employee.holiday.nextHoliday}/>
            <Overtime hours={employee.overtimeHour}/>
        </ul>
    )
}