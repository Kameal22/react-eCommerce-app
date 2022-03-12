import React from "react";
import "../../styles/cartStyles/cartSummary.scss";
import Button from "@mui/material/Button";

interface CartPriceProps {
  price: number,
}

const CartSummary: React.FC<CartPriceProps> = props => {
  return (
    <div className="shoppingCartSummaryDiv">
      <h3>Cart value: {props.price} $</h3>
      <Button onClick={() => console.log(props.price)} variant="contained" className="proceedBtn" type="submit">
        Proceed
      </Button>
    </div>
  );
};

export default CartSummary;
