import React from "react";
import { Link } from "react-router-dom";
import "./ExpandedMenu.css";
// import { toOptimizedImage } from '../../helpers/general';

const ExpandedMenu = (props) => {
  const { menu } = props;

  if (menu === null || menu === undefined) return <React.Fragment />;
  return (
    <div className="expandedMenu">
      <div className="linkContainersExpandedMenu">
        {menu?.map((item, index) => {
          return (
            <div key={index} className="categoryContainerExpandedMenu">
              <span className="categoryNameExpandedMenu">
                {item.categoryLabel}
              </span>
              <ul>
                {item.submenu.map((link, linkIndex) => {
                  return (
                    <li key={linkIndex}>
                      <Link className="menuLinkExpandedMenu" to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="imageContainerExpandedMenu"></div>
    </div>
  );
};

export default ExpandedMenu;
