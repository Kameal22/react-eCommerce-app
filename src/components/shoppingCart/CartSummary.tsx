import React from "react";
import "../../styles/cartStyles/cartSummary.scss";
import { Link } from "react-router-dom";

interface CartPriceProps {
  price: number;
}

const CartSummary: React.FC<CartPriceProps> = (props) => {
  return (
    <div className="shoppingCartSummaryDiv">
      <h3>Cart value: {props.price} $</h3>
      {props.price !== 0 ? (
        <Link to="/proceed" className="logoLink">
          <button className="proceedBtn" type="submit">
            Proceed
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default CartSummary;
