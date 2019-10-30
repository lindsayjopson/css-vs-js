import React, { useState } from "react";

export const NavMenu = () => {
  let [isHidden, setState] = useState(false);

  return (
    <div className={`nav_wrap ${isHidden ? "hidden" : "visible"}`}>
      <div
        className="nav_toggle"
        onClick={() =>
          setState(isHidden === true ? (isHidden = null) : (isHidden = true))
        }
      >
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <ul className="nav_menu">
        <li className="nav_menu--item">
          <a href="#">Menu Item</a>
        </li>
        <li className="nav_menu--item">
          <a href="#">Menu Item</a>
        </li>
        <li className="nav_menu--item">
          <a href="#">Menu Item</a>
        </li>
      </ul>
    </div>
  );
};
