import "../../../styles/profileStyles/login.scss";
import NavLogo from "../../nav/NavLogo";
import Footer from "../../footer/Footer";
import RegisterForm from "./RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="registerDiv">
      <div className="shortPageNav">
        <NavLogo />
      </div>
      <RegisterForm />
      <div className="shortPageFooter">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
