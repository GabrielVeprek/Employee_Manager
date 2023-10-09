import {BodyList} from "./bodyList/BodyList.jsx";

export function DetailsBody(employee) {

    return (
        <div className="card">
            <div className="card-header">
                Employee - {employee.id}
                <BodyList employee={employee}/>
            </div>
        </div>


    );
}