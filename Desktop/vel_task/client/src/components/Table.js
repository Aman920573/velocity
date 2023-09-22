import React from "react";

function Table({ data }) {
  console.log(data, "____admin");
  return (
    <>
      <div className="w-500">
        <table class="table">
          <thead>
            <tr bg-dark>
              <th scope="col">Id</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td> {item.firstname} </td>
                  <td> {item.lastname} </td>
                  <td> {item.email} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
