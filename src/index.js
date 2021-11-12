import React from 'react';
import ReactDom from 'react-dom';

// Page Imports
import './pages/Register_page';
import RegisterPage from './pages/Register_page';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
   <div>
     <h2>Main Landing Page</h2>
    <RegisterPage />
    <LoginPage />
    </div>
  );
}

ReactDom.render(
<App/>,
document.querySelector("#root")
);