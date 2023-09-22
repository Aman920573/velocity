import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Table from "../components/Table";
import axios from "axios";

function Admin() {
  const [admin, setAdmin] = useState([]);
  const showUserData = async () => {
    try {
      const val = await axios.get("http://localhost:8080/api/v1/user/getdata");
      console.log(val, "878687678678678");
      setAdmin(val.data.data);
      console.log(admin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showUserData();
  }, [admin.length]);
  return (
    <>
      <h2>Admin management</h2>
      <Nav />
      <Table data={admin} />
    </>
  );
}

export default Admin;
