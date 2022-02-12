import React from "react";
import Footer from "../footer/Footer";
import NavLogo from "../nav/NavLogo";
import "../../styles/cartStyles/cart.scss";
import CartItem from "./cartItem/CartItem";
import CartSummary from "./CartSummary";
import AditionalCartInfo from "./AditionalCartInfo";

const Cart: React.FC = () => {
  // If cart is empty - "Your cart is empty" and back to main page button.
  return (
    <div className="shoppingCartDiv">
      <div className="registerNav">
        <NavLogo />
      </div>
      <div className="usersCartDiv">
        <h2>YOUR CART(num items)</h2>
        <i className="bi bi-trash"></i>
        <h3>Clear cart</h3>
        <CartItem />
        <CartSummary />
        <AditionalCartInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
