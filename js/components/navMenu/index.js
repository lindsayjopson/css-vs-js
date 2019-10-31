import React, { useState } from "react";
import styled from "styled-components";

import { grey, greyLight, white, black } from "../../styles/globalVariables";

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

  &:hover {
    cursor: pointer;
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
`;

const NavToggle = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  right: -45px;
`;

const NavMenuWrap = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 45px 0;
  overflow: hidden;
  background: ${greyLight};
`;

const NavMenuItem = styled.a`
  display: block;
  width: 100%;
  font-size: 18px;
  padding: 8px 20px;
  &:hover {
    background-color: ${grey};
  }
`;

const NavWrap = styled.div`
  position: absolute;
  width: 350px;
  left: 0;
  top: 0;
  bottom: 0;
  background: ${greyLight};
  &.hidden {
    left: -350px;
  }
  transition: 0.3s;
`;

export const NavMenu = () => {
  let [isHidden, setState] = useState(false);

  return (
    <NavWrap className={`${isHidden ? "hidden" : "visible"}`}>
      <NavToggle
        onClick={() =>
          setState(isHidden === true ? (isHidden = null) : (isHidden = true))
        }
      >
        <Hamburger>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Hamburger>
      </NavToggle>
      <NavMenuWrap>
        <li>
          <NavMenuItem href="#">Menu Item</NavMenuItem>
        </li>
        <li>
          <NavMenuItem href="#">Menu Item</NavMenuItem>
        </li>
        <li>
          <NavMenuItem href="#">Menu Item</NavMenuItem>
        </li>
      </NavMenuWrap>
    </NavWrap>
  );
};
