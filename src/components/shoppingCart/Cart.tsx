import React from "react";
import Footer from "../footer/Footer";
import NavLogo from "../nav/NavLogo";
import "../../styles/cartStyles/cart.scss";
import CartItem from "./cartItem/CartItem";
import CartSummary from "./CartSummary";
import AditionalCartInfo from "./AditionalCartInfo";
import axios from "axios";

const Cart: React.FC = () => {
  // If cart is empty - "Your cart is empty" and back to main page button.
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3000/laptops");

    console.log(response);
  };
  return (
    <div className="cart">
      <div className="registerNav">
        <NavLogo />
      </div>
      <div className="cartAndSummaryDiv">
        <div className="usersCartDiv">
          <div className="cartNav">
            <h2 onClick={() => fetchProducts()} className="yourCartHeading">
              YOUR CART(num items)
            </h2>
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
      <div className="cartFooterDiv">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
