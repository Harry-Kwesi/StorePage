import React, { useEffect } from "react";
import Icon from "../icons/Icon";
import "./Drawer.css";

const Drawer = ({
  children,
  visible,
  close,
  top = "0px",
  isReverse = false,
  hideCross = false,
}) => {
  useEffect(() => {
    window.addEventListener("keydown", escapeHandler);
    return () => window.removeEventListener("keydown", escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) close();
  };

  const showStyle = isReverse === true ? "showReverse" : "showContent";
  const hideStyle = isReverse === true ? "hideReverse" : "hideContent";

  return (
    <div
      style={{ top: top }}
      className={`
      drawer
      ${visible === true ? "showDrawer" : "hideDrawer"}
      ${isReverse === true ? "isReverse" : ""}
    `}
    >
      <div
        className={`overlay ${visible === true ? "showOverlay" : "hideDrawer"}`}
        role={"presentation"}
        onClick={close}
      >
        <div
          className={`iconContainerDrawer ${
            hideCross === true ? "hideDrawer" : ""
          }`}
        >
          <Icon symbol={"cross"}></Icon>
        </div>
      </div>

      <div className={`content ${visible === true ? showStyle : hideStyle}`}>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
