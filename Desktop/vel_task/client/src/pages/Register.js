import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const onfinishHandler = async (values) => {
    const firstname = values.firstname;
    const lastname = values.lastname;
    const email = values.email;
    const password = values.password;
    const confirmpassword = values.confirmpassword;
    const role = "admin";
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
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4 bg-white m-auto wdth">
          <h2 className="text-center pt-3"> Register Now</h2>
          <Form onFinish={onfinishHandler}>
            <Form.Item name="firstname">
              <Input type="text" placeholder="enter first name" />
            </Form.Item>
            <Form.Item name="lastname">
              <Input type="text" placeholder="enter last name" />
            </Form.Item>
            <Form.Item name="email">
              <Input type="text" placeholder="enter your email" />
            </Form.Item>
            <Form.Item name="password">
              <Input type="text" placeholder="enter your password" />
            </Form.Item>
            <Form.Item name="confirmpassword">
              <Input type="text" placeholder="enter your password again" />
            </Form.Item>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
            <div className="mb-3">
              <Link to="/login">Already register then Login</Link>
            </div>
            <div className="mb-3">
              <Link to="/registervendor">register as vendor</Link>
            </div>
            <div className="mb-3">
              <Link to="/forgot">Forgot password</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
