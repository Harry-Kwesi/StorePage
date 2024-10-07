import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../button/Button";
import CurrencyFormatter from "../currencyformatter/CurrencyFormatter";
import MiniCartItem from "../miniCartItem/MiniCartItem";
import "./MiniCart.css";

const MiniCart = (props) => {
  const navigate = useNavigate();

  const sampleCartItem = {
    image: "",
    alt: "",
    name: "Nike Jumper",
    price: 220,
    color: "Turquoise Blue",
    size: "s",
  };

  return (
    <div className="minicart">
      <div className="titleContainerMinicart">
        <h4>My Bag</h4>
      </div>
      <div className="cartItemsContainerMinicart">
        <MiniCartItem {...sampleCartItem} />
      </div>
      <div className="summaryContainerMinicart">
        <div className="summaryContentMinicart">
          <div className="totalContainerMinicart">
            <span>Total (USD)</span>
            <span>
              <CurrencyFormatter amount={220} appendZero />
            </span>
          </div>
          <span className="taxNotes">
            Taxes and shipping will be calculated at checkout
          </span>
          <Button onClick={() => navigate("/cart")} level={"primary"} fullWidth>
            checkout
          </Button>
          <div className="linkContainerMinicart">
            <Link to={"/shop"}>continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
