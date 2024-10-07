import React, { useState, createRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from "../container/Container";
import Config from "../../config.json";
import Brand from "../brand/Brand";
import Icon from "../icons/Icon";
import FormInputField from "../formInputField/FormInputField";
import ExpandedMenu from "../expandedMenu/ExpandedMenu";
import Drawer from "../drawer/Drawer";
import MiniCart from "../miniCart/MiniCart";
import MobileNavigation from "../mobileNavigation/MobileNavigation";

const Navbar = () => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const [menu, setMenu] = useState();
  const [activeMenu, setActiveMenu] = useState();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const searchRef = createRef();

  const handleHover = (navObject) => {
    if (navObject.category) {
      setShowMenu(true);
      setMenu(navObject.category);
      setShowSearch(false);
    } else {
      setMenu(undefined);
    }
    setActiveMenu(navObject.menuLabel);
  };

  return (
    <div className="navRoot">
      {/* <Link to={"/"}>
        <img alt="Logo" src={logo} />
      </Link> */}

      <Container size={"large"} spacing={"min"}>
        <div className="header">
          <Brand />
          <div className="linkContainer">
            <nav
              role={"presentation"}
              onMouseLeave={() => {
                setShowMenu(false);
              }}
            >
              {Config.headerLinks.map((navObject) => {
                return (
                  <Link
                    key={navObject.link}
                    onMouseEnter={() => handleHover(navObject)}
                    className={`navLink ${
                      activeMenu === navObject.menuLabel ? "activeLink" : ""
                    }`}
                    to={navObject.menuLink}
                  >
                    {navObject.menuLabel}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div
            className="burgerIcon"
            role="presentation"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <Icon symbol={`${mobileMenu === true ? "cross" : "burger"}`}></Icon>
          </div>

          <div className="actionContainers">
            <button
              aria-label="Search"
              className={`iconButton iconContainer`}
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            >
              <Icon symbol={"search"}></Icon>
            </button>
            <Link
              aria-label="Favorites"
              // href="/account/favorites"
              className={`iconContainer hideOnMobile`}
            >
              <Icon symbol={"heart"}></Icon>
            </Link>
            <Link
              aria-label="Orders"
              // href={isAuth() ? '/login' : '/account/orders/'}
              className={`iconContainer hideOnMobile`}
            >
              <Icon symbol={"user"}></Icon>
            </Link>
            <button
              aria-label="Cart"
              className={`iconButton iconContainer bagIconContainer`}
              onClick={() => {
                setShowMiniCart(true);
                setMobileMenu(false);
              }}
            >
              <Icon symbol={"bag"}></Icon>
              <div className="bagNotification">
                <span>1</span>
              </div>
            </button>
            <div className="notificationContainer">
              {/* <AddNotification openCart={() => setShowMiniCart(true)} /> */}
            </div>
          </div>
        </div>

        <div
          className={`searchContainer ${showSearch === true ? "show" : "hide"}`}
        >
          <h4>What are you looking for?</h4>
          <form className="searchForm" onSubmit={(e) => handleSearch(e)}>
            <FormInputField
              ref={searchRef}
              icon={"arrow"}
              id={"searchInput"}
              value={search}
              placeholder={""}
              type={"text"}
              handleChange={(_, e) => setSearch(e)}
            />
          </form>
          {/* <div className={styles.suggestionContianer}>
            {searchSuggestions.map((suggestion, index) => (
              <p
                role={'presentation'}
                onClick={() => {
                  setShowSearch(false);
                  navigate(`/search?q=${suggestion}`);
                }}
                key={index}
                className={styles.suggestion}
              >
                {suggestion}
              </p>
            ))}
          </div> */}
          {/* <div
            role={'presentation'}
            onClick={(e) => {
              e.stopPropagation();
              setShowSearch(false);
            }}
            className={styles.backdrop}
          ></div> */}
        </div>
      </Container>

      <div
        role={"presentation"}
        onMouseLeave={() => setShowMenu(false)}
        onMouseEnter={() => setShowMenu(true)}
        className={`menuContainer ${showMenu === true ? "show" : ""}`}
      >
        <Container size={"large"} spacing={"min"}>
          <ExpandedMenu menu={menu} />
        </Container>
      </div>

      <Drawer visible={showMiniCart} close={() => setShowMiniCart(false)}>
        <MiniCart />
      </Drawer>

      <div className="mobileMenuContainer">
        <Drawer
          hideCross
          top={"180px"}
          isReverse
          visible={mobileMenu}
          close={() => setMobileMenu(false)}
        >
          <MobileNavigation close={() => setMobileMenu(false)} />
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
