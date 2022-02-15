import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingView from "./components/mainView/LandingView";
import LoginForm from "./components/profile/login/LoginForm";
import Cart from "./components/shoppingCart/Cart";
import Wishlist from "./components/profile/userProfile/Wishlist";
import Profile from "./components/profile/userProfile/Profile";
import LogIn from "./components/profile/login/Login";
import Register from "./components/profile/registration/Register";
import { LogInProvider } from "./contexts/LoggedInContext";

const App: React.FC = () => {
  return (
    <LogInProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
    </LogInProvider>
  );
};

export default App;
