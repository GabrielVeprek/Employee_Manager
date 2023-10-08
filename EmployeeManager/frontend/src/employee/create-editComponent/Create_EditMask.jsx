// eslint-disable-next-line react/prop-types
export function Create_EditMask({ children }) {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    {children}
                </div>
            </div>
        </div>
    );
}