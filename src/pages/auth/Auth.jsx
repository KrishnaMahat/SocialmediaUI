import React, { useContext } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import Login from '../../components/login/Login';





const Auth = () => {
  const isLoggedIn = false;
    return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Memefuli</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      
      <Login />
    </div>
  );
};

export default Auth;
