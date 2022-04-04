import React from "react";
import Footer from "../../footer/Footer";
import NavLogo from "../../nav/NavLogo";
import "../../../styles/profileStyles/profile.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <div className="wishes">
              <i className="bi bi-heart"></i>
              <Link to="/wishlist" className="navLink">
                <h4>Wishlist</h4>
              </Link>
            </div>
            <div className="accSettings">
              <i className="bi bi-cart"></i>
              <Link to="/cart" className="navLink">
                <h4>Cart</h4>
              </Link>
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
