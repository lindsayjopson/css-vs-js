import React, { useState } from "react";
import styled from "styled-components";

import { greyLight, white, black } from "../../styles/globalVariables";

const HamburgerLine = styled.div`
  position: relative;
  border-top: 2px solid ${black};
  top: 5px;
  &:nth-child(2) {
    top: 11px;
  }
  &:nth-child(3) {
    top: 17px;
  }
`;

const Hamburger = styled.div`
  position: relative;
  padding: 8px;
  height: 28px;
  background-color: ${greyLight};
  transition: 0.3s;

  .hidden & {
    background-color: ${white};
  }

  .visible & {
    &:hover {
      ${HamburgerLine} {
        top: 14px;
        transform: rotate(45deg);
        transition: 0.3s;

        &:nth-child(2) {
          display: none;
        }
        &:nth-child(3) {
          top: 12px;

          transform: rotate(-45deg);
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const NavWrap = styled.div`
  position: absolute;
  width: 350px;
  left: 0;
  top: 0;
  bottom: 0;
  background: ${greyLight};
  transition: 0.3s;

  &.hidden {
    left: -350px;
  }
`;

export const NavMenu = () => {
  let [isHidden, setState] = useState(false);

  return (
    <NavWrap className={`${isHidden ? "hidden" : "visible"}`}>
      <div
        className="nav_toggle"
        onClick={() =>
          setState(isHidden === true ? (isHidden = null) : (isHidden = true))
        }
      >
        <Hamburger>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Hamburger>
      </div>
      <ul className="nav_menu">
        <li>
          <a href="#" className="nav_menu--item">
            Menu Item
          </a>
        </li>
        <li>
          <a href="#" className="nav_menu--item">
            Menu Item
          </a>
        </li>
        <li>
          <a href="#" className="nav_menu--item">
            Menu Item
          </a>
        </li>
      </ul>
    </NavWrap>
  );
};
