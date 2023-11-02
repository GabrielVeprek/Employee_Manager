import axios from "axios";
import {useContext, useState} from "react";
import {appContext} from "../../App.jsx";

export function SearchBar() {
    const [inputValue, setInputValue] = useState("")
    const [, setAppState] = useContext(appContext)

    async function handleSearch(event) {
        setInputValue(event.target.value)
        const response = await axios.get(event.target.value === "" ? `http://localhost:8080/employee` : `http://localhost:8080/employee/search/${event.target.value}`)
        setAppState((currenState) => ({
            ...currenState, searchResult: response.data
        }))
    }

    return (
        <div className="d-flex align-items-center ml-auto">
            <form className="d-flex" role="search" onChange={event => event.preventDefault()}>
                <input className="form-control me-2"
                       aria-label="Search"
                       type="text"
                       placeholder="Firstname or Lastname..."
                       name="inputValue"
                       value={inputValue ?? ""}
                       onChange={(event) => handleSearch(event)}
                ></input>
            </form>
        </div>
    )
}