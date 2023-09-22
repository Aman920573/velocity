import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div classNameName="container">
        <div bg-dark>
          <ul className="nav nav-pills nav-fill bg-dark w-1000">
            <li className="nav-item">
              <Link className="nav-link ">Show Data</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <button className="btn btn-success">Logout</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
