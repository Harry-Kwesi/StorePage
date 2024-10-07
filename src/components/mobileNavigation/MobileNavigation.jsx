import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Config from "../../config.json";
import Icon from "../icons/Icon";
import { isAuth } from "../../helpers/general";
import "./MobileNavigation.css";

const MobileNavigation = (props) => {
  const { close } = props;
  const navigate = useNavigate();

  const [subMenu, setSubMenu] = useState();
  const [category, setCategory] = useState();
  const [depth, setDepth] = useState(0);

  const handleLogout = () => {
    window.localStorage.removeItem("key");
    navigate("/");
    close();
  };

  return (
    <div className="rootMobileNavigation">
      <nav>
        <div className="headerAuth">
          {depth === 0 && isAuth() === false && (
            <div className="authLinkContainer">
              <Link to={"/signup"}>Sign Up</Link>
              <Link to={"/login"}>Login</Link>
            </div>
          )}

          {depth === 0 && isAuth() === true && (
            <div
              className="welcomeContainer"
              role={"presentation"}
              onClick={() => setDepth(-1)}
            >
              <span className="welcomeMessage">Welcome, John</span>
              <Icon symbol={"caret"}></Icon>
            </div>
          )}

          {depth === -1 && isAuth() === true && (
            <div
              className="previousLinkContainer"
              onClick={() => setDepth(0)}
              role={"presentation"}
            >
              <div className="previousIcon">
                <Icon symbol={"caret"}></Icon>
              </div>
              <span>my account</span>
            </div>
          )}

          {depth === 1 && (
            <div
              className="previousLinkContainer"
              onClick={() => setDepth(0)}
              role={"presentation"}
            >
              <div className="previousIcon">
                <Icon symbol={"caret"}></Icon>
              </div>
              <span>{category.menuLabel}</span>
            </div>
          )}

          {depth === 2 && (
            <div
              className="previousLinkContainer"
              onClick={() => setDepth(1)}
              role={"presentation"}
            >
              <div className="previousIcon">
                <Icon symbol={"caret"}></Icon>
              </div>
              <span>{subMenu.categoryLabel}</span>
            </div>
          )}
        </div>

        <div className="mobileNavContainer">
          {/* dynamic portion */}
          {depth === 0 && (
            <div>
              {Config.headerLinks.map((navObject) => {
                const hasSubmenu =
                  navObject.category?.length !== undefined ? true : false;
                return (
                  <Link
                    key={navObject.menuLink}
                    className="mobileLink"
                    to={hasSubmenu === true ? "" : navObject.menuLink}
                    onClick={() => {
                      if (hasSubmenu) {
                        setDepth(1);
                        setCategory(navObject);
                      }
                    }}
                  >
                    {navObject.menuLabel}
                    {hasSubmenu && <Icon symbol={"caret"}></Icon>}
                  </Link>
                );
              })}
              <div className="navFooter">
                <Link to={"/favorites"}>
                  <Icon symbol={"heart"} />
                  Favorites (0)
                </Link>
              </div>
            </div>
          )}

          {depth === 1 &&
            category.category.map((menuItem) => {
              return (
                <Link
                  key={menuItem.categoryLabel}
                  to={""}
                  onClick={() => {
                    setDepth(2);
                    setSubMenu(menuItem);
                  }}
                  className="mobileLink"
                >
                  {menuItem.categoryLabel}
                  <Icon symbol={"caret"}></Icon>
                </Link>
              );
            })}

          {depth === 2 &&
            subMenu.submenu.map((menuItem) => {
              return (
                <Link
                  key={menuItem.menuLabel}
                  to={menuItem.menuLink}
                  className="edgeLink"
                >
                  {menuItem.menuLabel}
                </Link>
              );
            })}

          {depth === -1 && (
            <>
              <div>
                <Link to={"/account/orders/"} className="mobileLink">
                  Orders
                </Link>
                <Link to={"/account/address/"} className="mobileLink">
                  Addresses
                </Link>
                <Link to={"/account/settings/"} className="mobileLink">
                  Settings
                </Link>
                <Link to={"/account/viewed/"} className="mobileLink">
                  Recently Viewed
                </Link>
              </div>
              <div className="navFooter">
                <div
                  className="logoutContainer"
                  role={"presentation"}
                  onClick={handleLogout}
                >
                  <Icon symbol={"logout"} />
                  <span>Sign out </span>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
