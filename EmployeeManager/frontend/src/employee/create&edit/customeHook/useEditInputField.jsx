import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"
import {getAuthenticatedResult, postAuthenticatedResult, putAuthenticatedResult} from "../../../utils/getToken.js"
import {employeeURL} from "../../../URLs/EmployeeStatsURL.js"

export function useEditInputField(id) {

    let navigate = useNavigate()
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        entryDate: "",
        position: "",
        salary: 0,
        task: "",
        holiday: {amount: 0, nextHoliday: ""},
        overtimeHour: 0
    })

    useEffect(() => {
        if (id !== undefined) {
            loadEmployee()
        }
    }, [id])

    const loadEmployee = async () => {
        const result = await getAuthenticatedResult(`${employeeURL}/${id}`)
        setEmployee(result.data)
    }
    const onInputChange = (event) => {

        const {name, value} = event.target
        const propertyPath = name.split('.')
        let updatedEmployee = {...employee}
        let currentLevel = updatedEmployee

        for (let i = 0; i < propertyPath.length - 1; i++) {
            currentLevel = currentLevel[propertyPath[i]]
        }
        currentLevel[propertyPath[propertyPath.length - 1]] = value
        setEmployee(updatedEmployee)
    }

    const onUpdate = async (event) => {
        event.preventDefault()
        await putAuthenticatedResult(`${employeeURL}/${id}`, employee)
        navigate("/")
    }

    const onCreate = async (event) => {
        event.preventDefault()
        await postAuthenticatedResult(employeeURL, employee)
        navigate("/")
    }

    const onSubmit = id === undefined ? onCreate : onUpdate

    return (
        {onInputChange, onSubmit, employee}
    )
}