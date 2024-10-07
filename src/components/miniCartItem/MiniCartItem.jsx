import React from "react";
import { useNavigate } from "react-router-dom";
import AdjustItem from "../adjustItem/AdjustItem";
import CurrencyFormatter from "../currencyformatter/CurrencyFormatter";
import RemoveItem from "../removeItem/RemoveItem";
import "./MiniCartItem.css";
import { toOptimizedImage } from "../../helpers/general";

const MiniCartItem = (props) => {
  const { image, alt, name, price, color, size } = props;
  const navigate = useNavigate();

  return (
    <div className="miniCartItem">
      <div
        className="imageContainerMiniCartItem"
        role={"presentation"}
        onClick={() => navigate("/product/sample")}
      >
        <img src={toOptimizedImage(image)} alt={alt} />
      </div>
      <div className="detailsContainerMiniCartItem">
        <div className="metaContainerMiniCartItem">
          <span className="nameMiniCartItem">{name}</span>
          <div className="priceContainerMiniCartItem">
            <CurrencyFormatter amount={price} />
          </div>
          <span className="metaMiniCartItem">Color: {color}</span>
          <span className="metaMiniCartItem">
            Size:
            <span className="sizeMiniCartItem">{size}</span>
          </span>
        </div>
        <div className="adjustItemContainer">
          <AdjustItem />
        </div>
      </div>
      <div className="closeContainerMiniCartItem">
        <RemoveItem />
      </div>
    </div>
  );
};

export default MiniCartItem;
