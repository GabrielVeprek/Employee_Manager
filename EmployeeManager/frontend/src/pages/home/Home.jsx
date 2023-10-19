import { TableBody } from "./component/TableBody.jsx";
import { TableHead } from "./component/TableHead.jsx";

export default function Home() {
    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <TableHead />
                    <TableBody />
                </table>
            </div>
        </div>
    );
}
