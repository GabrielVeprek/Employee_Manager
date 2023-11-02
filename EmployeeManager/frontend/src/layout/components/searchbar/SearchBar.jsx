import axios from "axios" 
import {useContext, useState} from "react" 
import {appContext} from "../../../App.jsx" 
import {InputField} from "./InputField.jsx" 

export function SearchBar() {
    const [inputValue, setInputValue] = useState("")
    const [, setAppState] = useContext(appContext)
    const [noUserFound, setNoUserFound] = useState(false)

    async function handleSearch(event) {
        setInputValue(event.target.value)

        const response = await axios.get(event.target.value === "" ? `http://localhost:8080/employee` : `http://localhost:8080/employee/search/${event.target.value}`)
        setAppState((currenState) => ({
            ...currenState, searchResult: response.data
        }))
        setNoUserFound(response.data.length === 0)
    }

    return (
        <div className="d-flex align-items-center ml-auto">
            <InputField
                inputValue={inputValue}
                handleSearch={handleSearch}
                noUserFound={noUserFound}
            />
            {noUserFound ?
                <div className="alert alert-danger bottom-0" role="alert">
                    No employee found ! 🧐🧐
                </div>
                : ""}
        </div>

    )
}