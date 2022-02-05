import React from "react";
import "./styles/App.scss";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingView from "./components/mainView/LandingView";
import RegisterForm from "./components/profile/registration/RegisterForm";
import LoginForm from "./components/profile/login/LoginForm";
import Cart from "./components/shoppingCart/cart/Cart";
import Wishlist from "./components/profile/profile/Wishlist";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<LandingView />} />
          <Route path = "/register" element={<RegisterForm />} />
          <Route path = "/login" element={<LoginForm />} />
          <Route path = "/wishlist" element={<Wishlist />} />
          <Route path = "/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
