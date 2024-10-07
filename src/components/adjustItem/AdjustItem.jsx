import React, { useState } from "react";
import Icon from "../icons/Icon";
import "./AdjustItem.css";

const AdjustItem = (props) => {
  const { isTransparent } = props;
  const [qty, setQty] = useState(1);

  const handleOnChange = (e) => {
    const num = parseInt(e.target.value);
    setQty(num);
  };

  return (
    <div
      className={`rootadjustItem ${
        isTransparent === true ? "transparentAdjustItem" : ""
      }`}
    >
      <div
        className="iconContainerAdjustItem"
        role={"presentation"}
        onClick={() => {
          if (qty <= 1) return;
          setQty(qty - 1);
        }}
      >
        <Icon symbol={"minus"}></Icon>
      </div>
      <div className="inputContainerAdjustItem">
        <input
          className={`${
            isTransparent === true ? "transparentInputAdjustItem" : ""
          }`}
          onChange={(e) => handleOnChange(e)}
          type={"number"}
          value={qty}
        ></input>
      </div>
      <div
        role={"presentation"}
        onClick={() => setQty(qty + 1)}
        className="iconContainerAdjustItem"
      >
        <Icon symbol={"plus"}></Icon>
      </div>
    </div>
  );
};

export default AdjustItem;
