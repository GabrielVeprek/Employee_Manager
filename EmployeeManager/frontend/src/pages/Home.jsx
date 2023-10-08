
import {TableHead} from "./components/TableHead.jsx";
import {TableBody} from "./components/TableBody.jsx";

export default function Home() {


    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <TableHead/>
                    <TableBody/>
                </table>
            </div>
        </div>
    );
}
