import React from "react";

import "./Container.css";

const Container = ({ children, size, spacing, fullMobile }) => {
  return (
    <div
      className={`
      container 
      ${size ? size : ""} 
      ${spacing ? spacing : ""} 
      ${fullMobile ? "fullMobile" : ""}
    `}
    >
      {children}
    </div>
  );
};

export default Container;
