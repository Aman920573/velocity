import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";

function Showcateg() {
  const [getval, setGetval] = useState();
  const [send, setSend] = useState();

  const getValData = async () => {
    const tryp = await axios.get(
      "http://localhost:8080/api/v1/user/getactivecat"
    );
    setGetval(tryp?.data?.data);
    console.log(tryp?.data?.data);
  };

  useEffect(() => {
    getValData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="container mt-4">
        <div className="mt-4">
          <select
            className="form-select work"
            aria-label="Default select example"
            onChange={(e) => setSend(e.target.value)}
          >
            <option selected>Select one option</option>
            {/* {getval.map((item) => {
              return <option value={item.catname}> {item.catname} </option>;
            })} */}
          </select>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="m-5">
        <Link to="/">
          <button className="styl">Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Showcateg;
