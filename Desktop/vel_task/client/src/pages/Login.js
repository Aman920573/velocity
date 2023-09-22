import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEvent = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/login", {
        email,
        password,
      });
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("login successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
    <>
      <div className="container " style={{ width: 500 }}>
        <div className="bg-soft-primary">
          <div className="row">
            <div className="col-12">
              <div className="text-primary p-4">
                <h5 className="text-primary">Welcome to RFP System!</h5>
                <p>Sign in to continue</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="p-2">
            <form className="form-horizontal" onSubmit={handleEvent}>
              <div className="form-group">
                <label for="username">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label for="userpassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="userpassword"
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlInline"
                />
                <label
                  className="custom-control-label"
                  for="customControlInline"
                >
                  Remember me
                </label>
              </div>

              <div className="mt-3">
                <button
                  className="btn btn-primary btn-block waves-effect waves-light"
                  type="submit"
                >
                  Log In
                </button>
              </div>

              <div className="mt-4 text-center">
                <h5 className="font-size-14 mb-3">Sign in with</h5>

                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link
                      to="https://www.facebook.com/"
                      className="social-list-item bg-primary text-white border-primary"
                    >
                      <i className="mdi mdi-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="https://www.twitter.com/"
                      className="social-list-item bg-primary text-white border-primary"
                    >
                      <i className="mdi mdi-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="https://www.google.com/"
                      className="social-list-item bg-primary text-white border-primary"
                    >
                      <i className="mdi mdi-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4 text-center">
                <Link to="/register" className="text-muted">
                  <i className="mdi mdi-lock mr-1"></i> Register as admin
                </Link>
              </div>
              <div className="mt-4 text-center">
                <Link to="/registervendor" className="text-muted">
                  <i className="mdi mdi-lock mr-1"></i> Register as Vendor
                </Link>
              </div>
              <div className="mt-4 text-center">
                <Link to="/forgot">forgot password</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
