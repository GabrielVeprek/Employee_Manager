import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">Employee Manager</a>
          <button className="btn btn-outline-light" type="submit">
            Create Employee
          </button>
        </div>
      </nav>
    </div>
  );
}
