import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingView from "./components/mainView/LandingView";
import RegisterForm from "./components/profile/registration/RegisterForm";
import LoginForm from "./components/profile/login/LoginForm";
import Cart from "./components/shoppingCart/Cart";
import Wishlist from "./components/profile/userProfile/Wishlist";
import Profile from "./components/profile/userProfile/Profile";
import LogIn from "./components/profile/login/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
