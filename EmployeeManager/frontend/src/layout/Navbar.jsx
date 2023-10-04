import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="font-weight-bold fs-3">Employee Manager</span>
          </Link>
          <div>
            <Link
              className="btn btn-outline-light border-light shadow mx-2"
              to="/employeeStatistics"
              type="submit"
            >
              Statistics
            </Link>

            <Link
              className="btn btn-outline-light border-primary  bg-success shadow"
              to="/createEmployee"
              type="submit"
            >
              Create Employee
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
