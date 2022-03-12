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

const Cart: React.FC = () => {
  const cart = useContext(CartContext);
  const [cartItem, setCartItem] = useState<CartInterface[]>();
  const [cartValue, setCartValue] = useState<number>(0);

  const summarizeCartPrice = (price: number) => {
    return setCartValue(cartValue + price)
  }

  // cartItem?.forEach(item => {
  //   summarizeCartPrice(item.price);
  // })

  useEffect(() => {
    setCartItem(cart)
  }, [cart])
  // This will also clear cart on refresh, because CART changes on refresh - Data vaporizes.

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
                YOUR CART ({cartItem.length} items)
              </h3>
              <div className="clearCartDiv">
                <i className="bi bi-trash"></i>
                <h4 className="clearCartHeading">Clear cart</h4>
              </div>
            </div>
            {cartItem.map(item => {
              return (
                <CartItem name={item.name} img={item.img} price={item.price} />
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
