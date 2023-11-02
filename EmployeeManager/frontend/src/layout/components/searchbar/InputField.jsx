export function InputField({noUserFound, inputValue, handleSearch}) {
    return (<form className="d-flex" role="search" onChange={event => event.preventDefault()}>
        <input
            className={noUserFound ? "form-control me-2 border-danger text-danger" : "form-control me-2"}
            key="search"
            aria-label="Search"
            type="text"
            placeholder="Firstname or Lastname..."
            name="inputValue"
            value={inputValue ?? ""}
            onChange={(event) => handleSearch(event)}
        />
    </form>)

}