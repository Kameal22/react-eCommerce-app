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
        <div className="profileInfo">
          <div className="profileName">
            <p>Hi</p>
            <h4>User</h4>
          </div>
          <div className="profileOptions">
            <div className="orders">
              <i className="bi bi-clipboard"></i>
              <h3>Orders</h3>
            </div>
            <div className="wishes">
              <i className="bi bi-heart"></i>
              <h3>Wishlist</h3>
            </div>
            <div className="accSettings">
              <i className="bi bi-gear"></i>
              <h3>Account settings</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="cartFooterDiv">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
