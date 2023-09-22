import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleEv = () => {
    console.log("handle ebent");
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img
                      src="assets/images/velocity_logo.png"
                      alt=""
                      height="40"
                    />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="assets/images/velocity_logo.png"
                      alt=""
                      height=""
                    />
                  </span>
                </a>
              </div>
            </div>

            <div className="d-flex pr-2">
              <div className="dropdown d-inline-block">
                <span className="d-none d-xl-inline-block ml-1" key="t-henry">
                  Welcome Henry
                </span>
                &nbsp;&nbsp;
                <Link to="/login" onClick={handleEv}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            <div id="sidebar-menu">
              <ul className="metismenu list-unstyled" id="side-menu">
                <li>
                  <a href="dashboard.html" className="waves-effect">
                    <i className="mdi mdi-file-document-box-outline"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <Link to="/vendor" className="waves-effect">
                    <i className="mdi mdi-receipt"></i>
                    <span>Vendors</span>
                  </Link>
                </li>
                <li>
                  <Link to="/rfp" className="waves-effect">
                    <i className="mdi mdi-flip-vertical"></i>
                    <span>RFP Lists</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="waves-effect">
                    <i className="mdi mdi-apps"></i>
                    <span>User Management</span>
                  </Link>
                </li>

                <li>
                  <Link to="category" className="waves-effect">
                    <i className="mdi mdi-weather-night"></i>
                    <span>Categories</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div classNameName="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 align font-size-18">Dashborad</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link>Home</Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div>Welcome to RFP System.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
