import axios from "axios";
import {useContext, useState} from "react";
import {appContext} from "../../App.jsx";

export function SearchBar() {
    const [inputValue, setInputValue] = useState()
    const [, setAppState] = useContext(appContext)

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    async function handleSearch() {
        const response = await axios.get(`http://localhost:8080/employee/search/${inputValue}`)
        setAppState((currenState) => ({
            ...currenState, searchResult: response.data
        }))
    }

    return (
        <div className="d-flex align-items-center ml-auto">
            <form className="d-flex" role="search" onSubmit={event => event.preventDefault()}>
                <input className="form-control me-2"
                       aria-label="Search"
                       type="text"
                       placeholder="Search"
                       name="inputValue"
                       value={inputValue ?? ""}
                       onChange={onInputChange}
                ></input>
                <button className="btn btn-outline-light" type="submit" onClick={handleSearch}>Search
                </button>
            </form>
        </div>
    )
}