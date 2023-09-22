import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function Registervendor() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [revenue, setRevenue] = useState();
  const [employee, setEmployee] = useState();
  const [gstno, setGstno] = useState();
  const [panno, setPanno] = useState();
  const [phoneno, setPhoneno] = useState();
  const [category, setCategory] = useState();
  const [cat, setCat] = useState();

  const navigate = useNavigate();

  const runFunction = (e) => {
    e.preventDefault();
    saveData();
    showData();
  };

  const saveData = async () => {
    const role = "vendor";
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        { firstname, lastname, email, password, confirmpassword, role }
      );
      if (res.data.success) {
        message.success("register successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  const showData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/vendorregister",
        { email, revenue, employee, gstno, panno, phoneno, category }
      );
      if (res.data.success) {
        message.success("register sucessfully ");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  const setCateg = async () => {
    // const check = await axios.get()
    const game = await axios.get("http://localhost:8080/api/v1/user/getcateg");
    setCat(game?.data?.data);
    // console.log(game, "game");
  };

  console.log(cat, " ______________cat");
  useEffect(() => {
    setCateg();
  }, []);
  return (
    <>
      <div className="container" style={{ width: 700 }}>
        <div className="bg-soft-primary">
          <div className="row">
            <div className="col-12">
              <div className="text-primary p-4">
                <h5 className="text-primary">Welcome to RFP System!</h5>
                <p>Regsiter as Vendor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="p-4">
            <form className="form-horizontal" onSubmit={runFunction}>
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="firstname">First name*</label>
                    <input
                      type="text"
                      className="form-control"
                      value={firstname}
                      id="firstname"
                      placeholder="Enter Firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="lastname">
                      Last Name<em>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={lastname}
                      id="lastname"
                      placeholder="Enter Lastname"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="email">Email*</label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      id="email"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="password">Password*</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      id="password"
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="password">Confirm Password*</label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmpassword}
                      id="confirmpassword"
                      placeholder="Enter Confirm Password"
                      onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="revenue">
                      Revenue (Last 3 Years in Lacks)*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={revenue}
                      id="revenue"
                      placeholder="Enter Revenue"
                      onChange={(e) => setRevenue(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="noofemployees">No of Employees*</label>
                    <input
                      type="text"
                      className="form-control"
                      value={employee}
                      id="noofemployees"
                      placeholder="No of Employees"
                      onChange={(e) => setEmployee(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="gstno">GST No*</label>
                    <input
                      type="text"
                      className="form-control"
                      value={gstno}
                      id="gstno"
                      placeholder="Enter GST No"
                      onChange={(e) => setGstno(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="panno">PAN No*</label>
                    <input
                      type="text"
                      className="form-control"
                      value={panno}
                      id="panno"
                      placeholder="Enter PAN No"
                      onChange={(e) => setPanno(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="revenue">Phone No*</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phoneno}
                      id="revenue"
                      placeholder="Enter Phone No"
                      onChange={(e) => setPhoneno(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label for="Categories">Categories*</label>
                    <select
                      className="form-control"
                      id="Categories"
                      value={category}
                      name="Categories"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      {cat?.map((item) => {
                        return (
                          <option value={item?.catname}>{item?.catname}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="p-2 mt-3">
                  <button
                    className="btn btn-primary btn-block waves-effect waves-light"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
