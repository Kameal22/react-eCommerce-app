import React from "react";
import "../../../styles/App.scss"
import "../../../styles/profileStyles/login.scss";
import LoginForm from "./LoginForm";
import NavLogo from "../../nav/NavLogo";
import Footer from "../../footer/Footer";

const LogIn: React.FC = () => {

  return (
    <div className="logginInDiv">
      <div className="shortPageNav">
        <NavLogo />
      </div>
      <LoginForm />
      <div className="shortPageFooter">
        <Footer />
      </div>
    </div>
  );
};

export default LogIn;
