import React from "react";
import Icon from "../icons/Icon";
import "./Dropdown.css";

const Dropdown = (props) => {
  const { label, optionList } = props;

  return (
    <div className="rootDropdown">
      <span className="labelDropdown">{label}</span>
      <div className="selectContainerDropdown">
        <select>
          {optionList.map((option) => (
            <option
              key={option.label}
              value={option.value}
              aria-label={`option ${label}`}
              label={option.label}
            />
          ))}
        </select>
        <div className="caretContainerDropdown">
          <Icon symbol={"caret"}></Icon>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
