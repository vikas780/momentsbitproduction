// Library Imports 
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Page Imports
import RegisterPage from './pages/User/Register_page';
import LoginPage from './pages/User/LoginPage';
import AdminPagelogin from './pages/Admin/login';
import LandingPage from './pages/User/landingPage';
import Statics from './pages/Admin/statics';

// Temp 
import Admindash from './pages/Admin/dashboard';

// Code
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admindash />}>
          <Route path="/admin/statics" element={<Statics/>} />
        </Route>
      </Routes>
    </Router> 
  );
}

ReactDom.render(
<App/>,
document.querySelector("#root")
);


// Remember - Components name always start with capital letter