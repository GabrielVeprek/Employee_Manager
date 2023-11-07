import {useEffect, useState} from 'react';
import {employeePositionsURL} from "../../../URLs/EmployeeStatsURL.js";
import {getAuthenticatedResult} from "../../../utils/getToken.js";

export function Position({onInputChange}) {
    const [positions, setPositions] = useState([])
    const [selectedPosition, setSelectedPosition] = useState('')

    useEffect(() => {
        const fetchPositions = async () => {
            const response = await getAuthenticatedResult(employeePositionsURL)
            setPositions(response.data)
        }
        fetchPositions()
    }, [])

    const handlePositionChange = (event) => {
        setSelectedPosition(event.target.value)
        onInputChange(event)
    }

    return (
        <div className="mb-3">
            <label className="form-label text-dark">
                Position
            </label>
            <select
                className="form-control"
                name="position"
                value={selectedPosition}
                onChange={handlePositionChange}
            >
                <option value="">Select a Position</option>
                {positions.map((position) => (
                    <option key={position} value={position}>
                        {position}
                    </option>
                ))}
            </select>
        </div>
    );
}
