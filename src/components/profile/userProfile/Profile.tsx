import React from "react";
import Footer from "../../footer/Footer";
import NavLogo from "../../nav/NavLogo";
import "../../../styles/profileStyles/profile.scss";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="registerNav">
        <NavLogo />
      </div>
      <div className="profileDiv">
        <h1>Your profile</h1>
      </div>
      <div className="cartFooterDiv">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
