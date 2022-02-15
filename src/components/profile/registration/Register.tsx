import React, { useContext } from "react";
import "../../../styles/profileStyles/login.scss";
import NavLogo from "../../nav/NavLogo";
import Footer from "../../footer/Footer";
import RegisterForm from "./RegisterForm";
import { useSetLoggedIn, LoggedInContext } from "../../../contexts/LoggedInContext";

const Register: React.FC = () => {
  const setLoggedIn = useSetLoggedIn()
  const loggedIn = useContext(LoggedInContext);

  const logUserIn = () =>{
    setLoggedIn(true)
  }

  return (
    <div className="registerDiv">
      <h1 onClick={() => logUserIn()}>TEST</h1>
      <div className="registerNav">
        <NavLogo />
      </div>
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
