import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import NavLogo from "../nav/NavLogo";
import "../../styles/cartStyles/cart.scss";
import CartItem from "./cartItem/CartItem";
import CartSummary from "./CartSummary";
import AditionalCartInfo from "./AditionalCartInfo";
import { CartInterface } from "../../interfaces/CartInterface";
import { CartContext } from "../../contexts/CartContext";
import { summarizeCartValue, clearCart, deleteClickedCartItem } from "../../utills/CartUtils";

const Cart: React.FC = () => {
  const cart = useContext(CartContext);

  const [cartItem, setCartItem] = useState<CartInterface[]>();
  const [cartValue, setCartValue] = useState<number>(0);

  useEffect(() => {
    setCartItem(cart)
  }, [cart])

  useEffect(() => {
    if (cartItem) {
      summarizeCartValue(cartItem, setCartValue)
    }
  }, [cartItem])

  if (!cartItem) {
    return (
      <div className="cart">
        <div className="shortPageNav">
          <NavLogo />
        </div>
        <h1>Cart is empty</h1>
        <Link to="/" className="logoLink">
          <button>Go back</button>
        </Link>
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
                Your cart: ({cartItem.length} items)
              </h3>
              <div className="clearCartDiv">
                <i onClick={() => clearCart(setCartItem)} className="bi bi-trash"></i>
                <h4 onClick={() => clearCart(setCartItem)} className="clearCartHeading">Clear cart</h4>
              </div>
            </div>
            {cartItem.map(item => {
              return (
                <CartItem key={item.id} qty={item.qty} id={item.id} name={item.name} img={item.img} price={item.price} deleteItem={() => deleteClickedCartItem(cartItem, item.qty, item.id, setCartItem)} />
              )
            })}
          </div>
          <CartSummary price={cartValue} />
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
