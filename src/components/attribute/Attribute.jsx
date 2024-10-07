import React from "react";
import Icon from "../icons/Icon";
import "./Attribute.css";

const Attribute = (props) => {
  const { icon, title, subtitle } = props;

  return (
    <div className="attributeRoot">
      <div className="attributeIconContainer">
        <Icon symbol={icon}></Icon>
      </div>
      <span className="attributeTitle">{title}</span>
      <span className="attributeSubtitle">{subtitle}</span>
    </div>
  );
};

export default Attribute;
