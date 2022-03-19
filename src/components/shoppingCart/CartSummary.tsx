import React from "react";
import "../../styles/cartStyles/cartSummary.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface CartPriceProps {
  price: number;
}

const CartSummary: React.FC<CartPriceProps> = (props) => {
  return (
    <div className="shoppingCartSummaryDiv">
      <h3>Cart value: {props.price} $</h3>
      <Link to="/proceed" className="logoLink">
        <Button variant="contained" className="proceedBtn" type="submit">
          Proceed
        </Button>
      </Link>
    </div>
  );
};

export default CartSummary;
