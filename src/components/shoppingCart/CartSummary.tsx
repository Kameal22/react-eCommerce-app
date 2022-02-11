import React from "react";
import "../../styles/cartStyles/cartSummary.scss";

const CartSummary: React.FC = () => {
  return (
    <div className="shoppingCartSummaryDiv">
      <h3>Cart value : 1000$</h3>
      <button>Proceed</button>
    </div>
  );
};

export default CartSummary;
