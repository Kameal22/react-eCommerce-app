import React from "react";
import "../../../styles/profileStyles/login.scss";
import LoginForm from "./LoginForm";
import NavLogo from "../../nav/NavLogo";
import Footer from "../../footer/Footer";

const LogIn: React.FC = () => {
  const logo: string = `Web-Shop/>`;

  return (
    <div className="logginInDiv">
      <div className="registerNav">
        <NavLogo />
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LogIn;
