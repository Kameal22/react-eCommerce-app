import React, { useContext, useState } from "react";
import Footer from "../footer/Footer";
import NavLogo from "../nav/NavLogo";
import "../../styles/cartStyles/cart.scss";
import CartItem from "./cartItem/CartItem";
import CartSummary from "./CartSummary";
import AditionalCartInfo from "./AditionalCartInfo";
import { CartInterface } from "../../interfaces/CartInterface";
import { CartContext, SetCartContext } from "../../contexts/CartContext";

const Cart: React.FC = () => {
  const [cartItem, setCartItem] = useState<CartInterface[]>();

  const cart = useContext(CartContext);
  const setCart = useContext(SetCartContext);

  if (!cartItem) {
    return (
      <div className="cart">
        <div className="shortPageNav">
          <NavLogo />
        </div>
        <h1 onClick={() => console.log(cart)}>Cart is empty</h1>
        <button>Go back</button>
        <div className="shortPageFooter">
          <Footer />
        </div>
      </div>
    )
  } else {
    return (
      <div className="cart">
        <div className="shortPageNav">
          <NavLogo />
        </div>
        <div className="cartAndSummaryDiv">
          <div className="usersCartDiv">
            <div className="cartNav">
              <h3 className="yourCartHeading">
                YOUR CART(num items)
              </h3>
              <div className="clearCartDiv">
                <i className="bi bi-trash"></i>
                <h4 className="clearCartHeading">Clear cart</h4>
              </div>
            </div>
            <CartItem />
          </div>
          <CartSummary />
        </div>
        <AditionalCartInfo />
        <div className="shortPageFooter">
          <Footer />
        </div>
      </div>
    );
  }
};

export default Cart;
