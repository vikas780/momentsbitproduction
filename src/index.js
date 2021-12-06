// Library Imports
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Imports
import RegisterPage from "./pages/User/Register_page";
import LoginPage from "./pages/User/LoginPage";
import AdminPagelogin from "./pages/Admin/login";
import LandingPage from "./pages/User/landingPage";
import Statics from "./pages/Admin/statics";
import Login from "./pages/Admin/login";

// Temp
import Admindash from "./pages/Admin/dashboard";

// Code
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admindash />}>
          <Route path="/admin/Statics" element={<Statics />} />
          {/* <Route path="/admin/Login" element={<Login />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

// Remember - Components name always start with capital letter
