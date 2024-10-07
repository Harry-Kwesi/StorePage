import React from "react";
import Icon from "../icons/Icon";
import "./RemoveItem.css";

const RemoveItem = (props) => {
  return (
    <div className="rootRemoveItem">
      <Icon symbol={"cross"} />
    </div>
  );
};

export default RemoveItem;
