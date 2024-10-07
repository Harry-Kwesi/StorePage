import React, { useState } from "react";
import Icon from "../icons/Icon";
import "./Accordion.css";

const Accordion = (props) => {
  const { title, type = "caret", customStyle = {}, children } = props;

  const [open, setOpen] = useState(false);

  const icon =
    type === "caret" ? (
      <Icon symbol={"caret"}></Icon>
    ) : (
      <Icon symbol={`${open === true ? "minus" : "plus"}`}></Icon>
    );

  return (
    <div className="accordionRoot" style={customStyle}>
      <div
        className="accordionHeader"
        role="presentation"
        onClick={() => setOpen(!open)}
      >
        <span className="accordionTitle uppercase">{title}</span>
        <div className={`iconAccordion ${open === true ? "rotate" : ""}`}>
          {icon}
        </div>
      </div>
      <div
        className={`accordionContent ${
          open === true ? "showAccordion" : "hideAccordion"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
