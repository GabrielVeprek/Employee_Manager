export function DefaultMask({ children }) {
    return (
        <div className="container my-2">
            <div className="row text-center">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    {children}
                </div>
            </div>
        </div>
    )
}