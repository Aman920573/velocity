import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
//import {Link } from 'react-router-dom';

function Category() {
  const [categ, setCateg] = useState([]);
  const showDetails = async () => {
    const time = await axios.get("http://localhost:8080/api/v1/user/getcateg");
    console.log(time);
    setCateg(time?.data?.data);
  };

  useEffect(() => {
    showDetails();
  }, []);
  return (
    <div>
      <h1>Category Table</h1>
      <Nav />
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">categoryName</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categ?.map((item, indx = 0) => {
              return (
                <tr key={item._id}>
                  <td> {indx + 1} </td>
                  <td> {item.catname} </td>
                  <td>
                    <span
                      className={
                        item.status === "active" ? "active" : "inactive"
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    {" "}
                    <button className="button1">{item.action}</button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
