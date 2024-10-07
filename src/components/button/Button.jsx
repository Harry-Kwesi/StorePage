import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({
  children,
  href,
  target,
  level,
  type,
  size,
  disabled,
  onClick,
  className,
  flat,
  link,
  fullWidth,
  theme,
}) => {
  const classes = level ? ["button"] : ["link"];

  if (level) {
    classes.push(level);
  }
  if (size) {
    classes.push(size);
  }
  if (theme) {
    classes.push(theme);
  }
  if (disabled) {
    classes.push("disabled");
  }
  if (flat) {
    classes.push("flat");
  }
  if (link) {
    classes.push("link");
  }
  if (fullWidth) {
    classes.push("fullWidth");
  }
  if (className) {
    classes.push(className);
  }

  const classOutput = classes.join(" ");

  return (
    <>
      {href && target && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={classOutput}
          onClick={onClick}
        >
          {children}
        </a>
      )}
      {href && !target && (
        <Link to={href} className={classOutput} onClick={onClick}>
          {children}
        </Link>
      )}
      {!href && (
        <button
          className={classOutput}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
