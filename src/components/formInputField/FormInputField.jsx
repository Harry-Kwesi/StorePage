import React from "react";
import Icon from "../icons/Icon";
import "./FormInputField.css";

const FormInputField = React.forwardRef((props, ref) => {
  const {
    id,
    type = "text",
    labelName,
    value,
    pattern,
    min,
    max,
    handleChange,
    placeholder,
    disabled,
    note,
    error,
    required,
    icon,
  } = props;

  return (
    <div className={`formField`}>
      {labelName !== undefined && (
        <label htmlFor={id} className="label">
          {labelName} {required === true ? <span>*</span> : ""}
        </label>
      )}
      {(type === "text" || type === "input") && (
        <input
          id={id}
          name={id}
          type="text"
          value={value}
          pattern={pattern}
          placeholder={placeholder}
          className={`input ${icon ? "conditionalIconPadding" : ""} ${
            error && error ? "fieldRequired" : ""
          }`}
          onChange={(e) => handleChange(id, e.target.value)}
          disabled={disabled}
          ref={ref}
        />
      )}
      {type === "number" && (
        <input
          id={id}
          name={id}
          type="number"
          min={min}
          max={max}
          value={value}
          pattern={pattern}
          placeholder={placeholder}
          className={`styles.input ${icon ? "conditionalIconPadding" : ""} ${
            error && error ? styles.fieldRequired : ""
          }`}
          onChange={(e) => handleChange(id, e.target.value)}
          disabled={disabled}
          ref={ref}
        />
      )}
      {type === "password" && (
        <input
          id={id}
          name={id}
          type="password"
          value={value}
          placeholder={placeholder}
          pattern={pattern}
          className={`input ${icon ? "conditionalIconPadding" : ""} ${
            error && error ? "fieldRequired" : ""
          }`}
          onChange={(e) => handleChange(id, e.target.value)}
          disabled={disabled}
          required={required}
        />
      )}
      {type === "email" && (
        <input
          id={id}
          name={id}
          type="email"
          value={value}
          pattern={pattern}
          placeholder={placeholder}
          className={`input ${icon ? "conditionalIconPadding" : ""} ${
            error && error ? "fieldRequired" : ""
          }`}
          onChange={(e) => handleChange(id, e.target.value)}
          disabled={disabled}
          ref={ref}
        />
      )}
      {type === "textarea" && (
        <textarea
          id={id}
          name={id}
          value={value}
          pattern={pattern}
          className={`textarea ${icon ? "conditionalIconPadding" : ""} ${
            error ? "fieldRequired" : ""
          }`}
          onChange={(e) => handleChange(id, e.target.value)}
          disabled={disabled}
          ref={ref}
        />
      )}
      {note && <span className={styles.note}>{note}</span>}
      {error && <span className={"error"}>{error}</span>}
      {icon && (
        <div
          className={`iconContainerFormInput ${
            labelName !== undefined ? "offsetIcon" : ""
          }`}
        >
          <Icon symbol={icon} />
        </div>
      )}
    </div>
  );
});

export default FormInputField;
