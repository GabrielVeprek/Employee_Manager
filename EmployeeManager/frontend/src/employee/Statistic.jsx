import React from "react";
import { Link } from "react-router-dom";

export default function Statistic() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>
          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name : </b>
                </li>
                <li className="list-group-item">
                  <b>Last Name : </b>
                </li>
                <li className="list-group-item">
                  <b>E-Mail : </b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2 " to="/">
            See all
          </Link>
        </div>
      </div>
    </div>
  );
}
