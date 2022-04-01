import React from "react";
import Footer from "../../footer/Footer";
import NavLogo from "../../nav/NavLogo";
import "../../../styles/profileStyles/profile.scss";
import { useState, useEffect } from "react";

const Profile: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const userName = window.localStorage.user

  useEffect(() => {
    setUsername(userName)
  }, [])


  return (
    <div className="profile">
      <div className="shortPageNav">
        <NavLogo />
      </div>
      <div className="profileDiv">
        <div className="profileInfo">
          <div className="profileName">
            <p>Hi</p>
            <h4>{username}</h4>
          </div>
          <div className="profileOptions">
            <div className="orders">
              <i className="bi bi-clipboard"></i>
              <h4>Orders</h4>
            </div>
            <div className="wishes">
              <i className="bi bi-heart"></i>
              <h4>Wishlist</h4>
            </div>
            <div className="accSettings">
              <i className="bi bi-gear"></i>
              <h4>Account settings</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="shortPageFooter">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
