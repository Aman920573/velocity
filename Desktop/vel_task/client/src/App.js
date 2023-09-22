import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Footer from "./components/Footer";
import "./App.css";
import Privateroute from "./components/Privateroute";
import Publicroute from "./components/Publicroute";
import Registervendor from "./pages/Registervendor";
import Vendor from "./pages/Vendor";
import Admin from "./pages/Admin";
import Rfplist from "./pages/Rfplist";
import Category from "./pages/Category";
import Showcateg from "./pages/Showcateg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Privateroute>
                <Home />
              </Privateroute>
            }
          />
          <Route
            path="/vendor"
            element={
              <Privateroute>
                <Vendor />
              </Privateroute>
            }
          />
          <Route
            path="/showcateg"
            element={
              <Privateroute>
                <Showcateg />
              </Privateroute>
            }
          />
          <Route
            path="/admin"
            element={
              <Privateroute>
                <Admin />
              </Privateroute>
            }
          />
          <Route
            path="/category"
            element={
              <Privateroute>
                <Category />
              </Privateroute>
            }
          />
          <Route
            path="/rfp"
            element={
              <Privateroute>
                <Rfplist />
              </Privateroute>
            }
          />
          <Route
            path="/login"
            element={
              <Publicroute>
                <Login />
              </Publicroute>
            }
          />
          <Route
            path="/register"
            element={
              <Publicroute>
                <Register />
              </Publicroute>
            }
          />
          <Route
            path="/registervendor"
            element={
              <Publicroute>
                <Registervendor />
              </Publicroute>
            }
          />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
