export function CardContainer ({children}) {
    return(
        <div className="card my-4">
            <div className="card-header text-primary">
                {children}
            </div>
        </div>
    )
}