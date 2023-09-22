import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Vendor() {
  const [status, setStatus] = useState([]);
  const showDetail = async () => {
    const value = await axios.get(
      "http://localhost:8080/api/v1/user/getuserdata"
    );
    // console.log(value, "---------------=========");
    //  console.log(value.data.data, "=============+++++++++++++=");

    setStatus(value.data.data);
    // console.log(status, "=============++++++++++++++=stats");
  };
  useEffect(() => {
    showDetail();
  }, [status.length]);

  const clearCon = () => {
    localStorage.clear();
  };

  const toggleStatus = (key) => {
    console.log(key, "++++++++=======___key");
  };

  return (
    <>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link className="logo logo-light">
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
                </Link>
              </div>
            </div>

            <div className="d-flex pr-2">
              <div className="dropdown d-inline-block">
                <span className="d-none d-xl-inline-block ml-1" key="t-henry">
                  Welcome Admin
                </span>
                &nbsp;&nbsp;
                <Link to="/login" className="" onClick={clearCon}>
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
                  <Link className="waves-effect">
                    <i className="mdi mdi-file-document-box-outline"></i>
                    <span>Dashboard</span>
                  </Link>
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
                  <Link to="/category" className="waves-effect">
                    <i className="mdi mdi-weather-night"></i>
                    <span>Categories</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">Vendors List</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link>Home</Link>
                        </li>
                        <li className="breadcrumb-item active">Vendors</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="TableHeader">
                        <div className="row">
                          <div className="col-lg-3">
                            <h4 className="card-title">Vendors</h4>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table
                          className="table mb-0 listingData dt-responsive"
                          id="datatable"
                        >
                          <thead>
                            <tr>
                              <th>S. No.</th>
                              <th>First name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Contact No</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {status.map((item, indx = 0) => {
                              return (
                                <tr key={item._id}>
                                  <td>{indx + 1}</td>
                                  <td>{item.firstname}</td>
                                  <td>{item.lastname}</td>
                                  <td>{item.email}</td>
                                  <td>{item.phoneno}</td>
                                  <td>{item.status}</td>
                                  <td>
                                    <button
                                      onClick={() => toggleStatus(item.email)}
                                    >
                                      Toggle status
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      <div className="row pt-3">
                        <div className="col-sm-12 col-md-5">
                          <div
                            className="dataTables_info"
                            id="datatable_info"
                            role="status"
                            aria-live="polite"
                          >
                            Showing 1 to 5 of 5 entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7 dataTables_wrapper ">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="datatable_paginate"
                          >
                            <ul className="pagination">
                              <li
                                className="paginate_button page-item previous disabled"
                                id="datatable_previous"
                              >
                                <Link
                                  href="#"
                                  aria-controls="datatable"
                                  data-dt-idx="0"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Previous
                                </Link>
                              </li>
                              <li className="paginate_button page-item active">
                                <Link
                                  href="#"
                                  aria-controls="datatable"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  1
                                </Link>
                              </li>
                              <li
                                className="paginate_button page-item next disabled"
                                id="datatable_next"
                              >
                                <Link
                                  href="#"
                                  aria-controls="datatable"
                                  data-dt-idx="2"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Next
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">2022 &copy; Copyright.</div>
                <div className="col-sm-6">
                  <div className="text-sm-right d-none d-sm-block">
                    Support Email:
                    <Link target="_blank" className="text-muted">
                      {" "}
                      support@velsof.com{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Vendor;
