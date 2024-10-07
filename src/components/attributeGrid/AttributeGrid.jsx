import React from "react";
import Attribute from "../attribute/Attribute";
import "./AttributeGrid.css";

const AttributeGrid = (props) => {
  return (
    <div className="attributeGridRoot">
      <Attribute
        icon={"delivery"}
        title={"free delivery worldwide"}
        subtitle={"Click to learn more"}
      />
      <Attribute
        icon={"cycle"}
        title={"returns"}
        subtitle={"Return goods in 30 days"}
      />
      <Attribute
        icon={"creditcard"}
        title={"secured payment"}
        subtitle={"Shop safely"}
      />
    </div>
  );
};

export default AttributeGrid;
