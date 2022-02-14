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
    <div className="cart">
      <div className="registerNav">
        <NavLogo />
      </div>
      <div className="cartAndSummaryDiv">
        <div className="usersCartDiv">
          <div className="cartNav">
            <h2 className="yourCartHeading">YOUR CART(num items)</h2>
            <div className="clearCartDiv">
              <i className="bi bi-trash"></i>
              <h3 className="clearCartHeading">Clear cart</h3>
            </div>
          </div>
          <CartItem />
        </div>
        <CartSummary />
      </div>
      <AditionalCartInfo />
      <Footer />
    </div>
  );
};

export default Cart;
