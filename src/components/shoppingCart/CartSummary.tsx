import React from "react";
import "../../styles/cartStyles/cartSummary.scss";
import Button from "@mui/material/Button";

const CartSummary: React.FC = () => {
  return (
    <div className="shoppingCartSummaryDiv">
      <h3>Cart value : 1000$</h3>
      <Button variant="contained" className="proceedBtn" type="submit">
        Proceed
      </Button>
    </div>
  );
};

export default CartSummary;
