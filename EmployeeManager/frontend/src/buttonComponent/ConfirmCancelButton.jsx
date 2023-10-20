export function ConfirmCancelButton ({deleteEmployee}) {
    return(
        <button
            className="btn btn-danger mx-2"
            onClick={deleteEmployee}>Confirm Delete
        </button>
    )
}