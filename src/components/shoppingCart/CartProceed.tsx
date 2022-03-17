import React from "react";
import "../../styles/cartStyles/cartProceed.scss";
import Footer from "../footer/Footer";
import NavLogo from "../nav/NavLogo";
import Button from "@mui/material/Button";

interface CartProceedProps {}

const CartProceed: React.FC<CartProceedProps> = (props) => {
  return (
    <div className="cartProceedDiv">
      <div className="shortPageNav">
        <NavLogo />
      </div>
      <div className="proceed">
        <div className="delivery">
          <h2>Shipment and payment</h2>
          <div className="deliveryChoice">
            <div>
              <p>Courier DHL</p>
            </div>
            <div>
              <p>Personal pickup</p>
            </div>
          </div>
          <h2>Payment method</h2>
          <div className="paymentMethod">
            <div>
              <p>BLIK</p>
            </div>
            <div>
              <p>Online transfer</p>
            </div>
            <div>
              <p>Cash on delivery</p>
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="summaryItem">
            <h3>Item name</h3>
            <p>Item img</p>
            <div className="qtyPrice">
              <p>Item qty</p>
              <p>Item price</p>
            </div>
          </div>
          <div className="deliveryRecieve">
            <div className="summaryDelivery">
              <i className="bi bi-truck"></i>
              <p>Shipment: DHL</p>
            </div>
            <div className="summaryRecieve">
              <i className="bi bi-box-seam"></i>
              <p>Recieve time: </p>
            </div>
          </div>
          <div className="summaryValues">
            <p>Cart Value: 999$</p>
            <p>Shipment: free</p>
            <h4>To pay: </h4>
            <div className="summaryBtnDiv">
              <Button variant="contained" className="lastBtn" type="submit">
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="shortPageFooter">
        <Footer />
      </div>
    </div>
  );
};

export default CartProceed;
