import {sliceID} from "../../../utils/ids.js"

export function TableBodyDate({employee}) {
    return (
        <>
            <td className="text-primary">{sliceID(employee.id)}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.mail}</td>
        </>
    )
}