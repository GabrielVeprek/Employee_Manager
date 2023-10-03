import React from "react";
import { Link } from "react-router-dom";

export default function CreateEmployee() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Create Employee</h2>
          <div className="mb-3">
            <label htmlFor="FirstName" className="form-label">
              First-Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="First-Name"
              firstName="First-Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LastName" className="form-label">
              Last-Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Last-Name"
              lastName="Last-Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="E-Mail" className="form-label">
              E-Mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="E-Mail"
              mail="E-Mail"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-danger mx-2" to="/">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
